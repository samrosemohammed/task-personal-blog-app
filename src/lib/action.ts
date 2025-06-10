import { ContactSchema } from "./zodSchemas";

export const contactAction = async (data: ContactSchema) => {
  console.log("Contact form submitted:", data);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true, message: "Contact form submitted successfully!" };
};
