/* eslint-disable */
import { redirect } from "react-router-dom";
import { deleteContact } from "../components/Contact";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}