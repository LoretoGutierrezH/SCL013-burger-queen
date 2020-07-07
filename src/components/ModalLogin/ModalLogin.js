import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalBody,
  Modal,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import firebase from "firebase";
import style from '../ModalLogin/ModalLogin.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faKey, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';



const ModalLogin = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submitInput = (event) => {
    event.preventDefault();
    let form = event.target;
    let password = form.password.value;
    let email = form.email.value;
    console.log(password, email);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //const user = firebase.auth().currentUser;
        console.log("usuario ingresado");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          alert("Contraseña Incorrecta");
        } else if (errorCode === "auth/user-not-found") {
          alert("Usuario no encontrado");
        } else {
          alert(
            "Problemas para iniciar sesión, verifique sus datos y vuelva a ingresar"
          );
        }
      });
  };

  return (

      <React.Fragment>
      <Button className={style.entrar} onClick={toggle}>
        Entrar
      </Button>
      <Modal  className={style.modal} contentClassName={style.modalContent} isOpen={modal} toggle={toggle}>
        <ModalBody className={style.modal} >
          <Form onSubmit={(event) => submitInput(event)}>
            <FormGroup id={style.form}>

            <i id={style.inpOne}> <FontAwesomeIcon icon={faEnvelopeOpen} /></i>
              <Input

                type="email"
                name="email"
                id="exampleEmail"

              />

            </FormGroup>
            <FormGroup id={style.form}>
            <i id ={style.inpTwo}> <FontAwesomeIcon icon={faKey}  /></i>
              <Input
                type="password"
                name="password"
                id="examplePassword"




              >
              </Input>

            </FormGroup>
            <Button color="danger">Entrar</Button>{" "}
          </Form>
        </ModalBody>

      </Modal>
    </React.Fragment>
  );
};
export default ModalLogin;
