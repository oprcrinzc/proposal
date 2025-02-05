export async function POST(req) {
  const formdata = await req.formData()
  const name = formdata.get("name")
  const pwd = formdata.get("pwd")
  return Response.json({name, pwd})
}