import "react-toastify/dist/ReactToastify.css";

import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "./ContactForm.css";
import { useForm } from "../../hooks/useForm";
import { I18nContext } from "../../utils/i18nProvider";

export const ContactForm = () => {
  const context = useContext(I18nContext);
  const [loading, setLoading] = useState<boolean>(false);
  const form: any = useRef();
  const {
    onChange,
    user_name,
    user_tel,
    user_email,
    message,
    resetForm,
    isValidEmail,
  } = useForm({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
  });
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (user_name.trim().length <= 2 || !isValidEmail(user_email)) {
      return toast.warning(
        context?.t.translate("contact.contactForm.validationError")
      );
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_yaat4lr",
        "template_af1rz1p",
        form.current as any,
        "1pJRcoYPZ5B_8OK6a"
      )
      .then(
        () => {
          setLoading(false);

          toast.success(context?.t.translate("contact.contactForm.success"));
        },
        () => {
          toast.error(context?.t.translate("contact.contactForm.error404"));
        }
      );
    resetForm();
  };
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />

      <form ref={form} onSubmit={sendEmail}>
        {/* <label htmlFor="outlined-basic"></label> */}
        <div>
          <input
            className="input-field w-full p-2 mb-4"
            type="text"
            name="user_name"
            id="outlined-basic"
            placeholder={context?.t.translate(
              "contact.contactForm.namePlaceholder"
            )}
            value={user_name}
            onChange={onChange}
            style={{
              borderBottom:
                user_name.trim().length <= 2
                  ? "1px solid red"
                  : "1px solid rgb(10, 180, 180)",
            }}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="input-field p-2 w-full"
            type="email"
            placeholder="Email *"
            name="user_email"
            value={user_email}
            onChange={onChange}
            style={{
              borderBottom: !isValidEmail(user_email)
                ? "1px solid red"
                : "1px solid rgb(10, 180, 180)",
            }}
          />
          <input
            className="input-field p-2 w-full"
            type="number"
            placeholder={context?.t.translate(
              "contact.contactForm.telPlaceholder"
            )}
            name="user_tel"
            value={user_tel}
            onChange={onChange}
          />
        </div>

        <textarea
          className="input-text w-full p-4 mt-4 h-52"
          placeholder={context?.t.translate(
            "contact.contactForm.textareaPlaceholder"
          )}
          value={message}
          onChange={onChange}
          name="message"
          id="custom-input"
        />

        {loading ? (
          <button className="button text-gray-100" disabled>
            {context?.t.translate("contact.contactForm.btnSending")}
          </button>
        ) : (
          <button className="button text-gray-100" type="submit">
            {context?.t.translate("contact.contactForm.btnSend")}
          </button>
        )}
      </form>
    </div>
  );
};
