import { toast } from "react-toastify";
import z, { ZodError } from "zod";

const inputSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be greater than 3 characters" })
    .max(50)
    .regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, {
      message: "Enter a Valid Name",
    }),
  email: z.string().email({ message: "Enter a valid email" }),
  message: z
    .string()
    .min(5, { message: "Message must be greater than 5 characters" })
    .max(1000),
});

export const validate = (data: { [k: string]: FormDataEntryValue }) => {
  try {
    const res = inputSchema.parse(data);
    console.log(res);
    return true;
  } catch (error) {
    const err = error as ZodError;
    console.log(err.issues[0].message);
    toast.error(err.issues[0].message, { theme: "colored" });
    return null;
  }
};

// Regex Supports the following characters

// abcdefghijklmnopqrstwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// áéíóúäëïöüÄ'
// 陳大文
// łŁőŐűŰZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųū
// ÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁ
// ŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ.-
// ñÑâê都道府県Федерации
// আবাসযোগ্য জমির걸쳐 있는
