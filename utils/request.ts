
async function request(url: string, options: any) {
  let resObj = {
    data: null,
    msg: "",
    success: false
  };
  try {
    let response = await fetch(url);

    if (response.status === 200) {
      let json = await response.json();
      resObj.msg = json.msg;
      if (json.status === 0) {
        resObj.data = json.data;
        resObj.success = true;
      }
    }
  } catch (err) {
    resObj.msg = "服务器发生错误";
  }

  return Promise.resolve(resObj);
}

export default request;