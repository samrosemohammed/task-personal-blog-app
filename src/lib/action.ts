import { ContactSchema } from "./zodSchemas";

export const contactAction = async (data: ContactSchema) => {
  // Simulate a server-side action, e.g., sending an email or saving to a database
  console.log("Contact form submitted:", data);

  // Here you would typically handle the form submission logic
  // For example, you might send the data to an API endpoint or save it to a database

  return { success: true, message: "Contact form submitted successfully!" };
};
