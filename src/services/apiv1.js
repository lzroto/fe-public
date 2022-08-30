export const CarListReady = async () => {
  try {
    const URL = 'https://lzroto-be.herokuapp.com/api/v1/mobil/get_list_mobil_ready'
    const CONFIG = {
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51Z3JvaG8uYWFsZGlAZ21haWwuY29tIiwidGltZSI6IjIwMjItMDgtMDhUMDk6MTE6NDErMDc6MDAiLCJpYXQiOjE2NTk5MjQ3MDF9.oxvlBIFp2ZLIBSSwu4StGZ5lMHlTAEGPAvCLcNWo_z8',
        app_version: 'devlzrotoappsukses'
      }
    }
    const resp = await fetch(URL,CONFIG)
    const respdataraw = await resp.json()
    const respdata = respdataraw.data
    const respstatus = resp.status
    if (respstatus >= 200 || respstatus < 300) {
      return {
        data: respdata,
        message: 'succesful',
        statusmessage: 'succesful',
        status: 200
      }
    } else if (respstatus >= 400 || respstatus < 500) {
      return {
        data: null,
        message: 'unsuccessful',
        statusmessage: 'unsuccessful',
        status: 400
      }
    } else if (respstatus >= 500 || respstatus < 600) {
      return {
        data: null,
        message: 'unsuccessful',
        statusmessage: 'unsuccessful',
        status: 500
      }
    } else {
      throw 'error'
    }
  } catch (error) {
    return {
      data: null,
      message: 'unsuccessful',
      statusmessage: 'unsuccessful',
      status: -1
    }
  }
}