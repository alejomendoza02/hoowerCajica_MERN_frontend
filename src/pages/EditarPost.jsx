import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import Form from "../components/admin/Form";

const EditarPost = () => {
  // ------------------- HOOKS -------------------


  // ------------------- useNavigate

  const navigate = useNavigate();

  // ------------------- getTokenAuth

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    token && (
      <>
        <main className="w-full h-auto">
          <NavbarAdmin />
          <Form />
        </main>
      </>
    )
  );
};

export default EditarPost;
