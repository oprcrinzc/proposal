"use server";

export async function SignInAction(formdata) {
  "use server";

  const fdata = {
    name: formdata.get("name"),
    pwd: formdata.get("pwd"),
  };

  console.log(fdata);
}

export async function SignUpAction(formdata) {
  "use server";

  const fdata = {
    name: formdata.get("name"),
    pwd: formdata.get("pwd"),
    prefix: formdata.get("prefix"),
    first: formdata.get("first"),
    last: formdata.get("last"),
    email: formdata.get("email"),
  };

  console.log(fdata);
}
