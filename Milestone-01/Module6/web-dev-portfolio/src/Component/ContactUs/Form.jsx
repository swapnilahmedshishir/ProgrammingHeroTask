import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [submiteMessage, setSubmiteMessage] = useState("");

  // use fromik method
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("url", values);
        if (response.data.Status) {
          setErrorMessage(null);
          setSubmiteMessage("free consultation requset successfull");
        }
      } catch (error) {
        setErrorMessage(`${error}`);
        setSubmiteMessage("");
      }

      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          placeholder="Full Name *"
          className="contactus_input_fild"
        />
        <PhoneInput
          country={"us"}
          value={formik.values.phoneNumber}
          onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
          inputProps={{
            name: "phoneNumber",
            required: true,
            autoFocus: true,
          }}
          className="contactus_input_fild"
        />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
          placeholder="Work Email *"
          className="contactus_input_fild"
        />
        <input
          type="text"
          id="emailSubject"
          name="subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
          required
          placeholder="Subject"
          className="contactus_input_fild"
        />
        <textarea
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          required
          placeholder="Message"
        />

        <input type="submit" value="Submit" className="btn" />
      </form>
    </>
  );
};

export default Form;
