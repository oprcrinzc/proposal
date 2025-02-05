export async function POST(req) {
  const formdata = await req.formData()
  const name = formdata.get("name")
  const pwd = formdata.get("pwd")
  const prefix = formdata.get("prefix")
  const first = formdata.get("first")
  const last = formdata.get("last")
  const email = formdata.get("email")
  return Response.json({name, pwd})
}