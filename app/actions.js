"use server";

import { serialize } from "cookie";
// import { encrypt } from '@/app/lib/session'
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";

var Users = [
  {
    name: "admin",
    pwd: "1234",
  }
]

export async function GetName() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  
  if (!token) return "";
  
  try {
    const decoded = jwt.decode(token, process.env.SECRET_A);
    console.log(token, decoded)
    return decoded.d.name; // Return username
  } catch {
    return "";
  }
}

export async function LogOut() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function SignInAction(formdata) {
  "use server";

  var result = false;
  
  const cs = await cookies()

  const fdata = {
    name: formdata.get("name"),
    pwd: formdata.get("pwd"),
  };

  Users.forEach((d, i)=>{
    console.log(i, d)
    fdata.name == d.name ? 
    fdata.pwd == d.pwd ? (async (d)=>{
      
      console.log("matchhh")
      let encryptedData = jwt.sign({ d }, process.env.SECRET_A, { expiresIn: "1h" });
      cs.set('session', encryptedData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        path: "/"
      })
      result = true
    })(d) : console.log("no pwd"): console.log("no name")
  })

  console.log(fdata);
  return result;
}

export async function SignUpAction(formdata) {
  "use server";

  const fdata = {
    name: formdata.get("name"),
    ipwd: formdata.get("ipwd"),
    cpwd: formdata.get("cpwd"),
    prefix: formdata.get("prefix"),
    first: formdata.get("first"),
    last: formdata.get("last"),
    email: formdata.get("email"),
  };

  console.log(fdata);
}
