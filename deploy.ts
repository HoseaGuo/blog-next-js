// import serverScript from 'run-server-script'

// serverScript({
  //   serverPath: "/data/www/blog/frontend", // 服务器需要存在该目录，否则出错
  //   gitRemoteUrl: "git@github.com:HoseaGuo/blog-next-js.git", // 因服务器需要git pull拉取新代码，所以要现在git仓库上配置 ssh keys
  //   scriptQueue: [ // script 队列
  //     "build",
  //     "serve",
  //   ],
  //   sshConfig: {
    //     host: '8.134.82.20',
    //     username: 'root',
    //     password: 'GUOHXa!3579'
    //   }
    // })

import deploy from "@hoseaguo/deploy";
import fs from 'fs';
import path from 'path';

// 复制目录、文件命令
function copyDirectory(src: string, dest: string) {
  let stats = fs.statSync(src);
  let isDirectory = stats.isDirectory();
  if (isDirectory) {
    createDirectory(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyDirectory(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}


// 创建文件夹
function createDirectory(name: string) {
  let destExist = fs.existsSync(name);
  if (!destExist) fs.mkdirSync(name);
}

let prodFiles = [".next", 'next.config.js', 'pm2-process.json'];
// copyDirectory('.next', 'dist/.next')
// copyDirectory('./package.json', 'dist/package.json')

// 把next start 命令运用到的文件都复制到dist目录中
prodFiles.forEach( (item) => {
  copyDirectory(item, `dist/${item}`)
})

async function buildPackageJson() {
  try {
    console.log("构建package.json文件开始");
    let packageJson = require("./package.json");
    let newPackageJson = {
      dependencies: packageJson.dependencies,
      scripts: packageJson.scripts
    };
    fs.writeFileSync("./dist/package.json", JSON.stringify(newPackageJson));
    console.log("构建package.json文件结束");
  } catch (e) {
    console.log(e);
    console.log("构建package.json文件失败");
    process.exit(1); //退出流程
  }
}

buildPackageJson();

deploy({
  host: '8.134.82.20',
  username: 'root',
  password: 'GUOHXa!3579',
  serverPath: "/data/www/blog/frontend",
  pm2ConfigFileName: "pm2-process.json"
});