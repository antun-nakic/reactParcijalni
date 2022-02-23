import React from "react";
import { connect } from "react-redux";
import { promijeniInputLogina, logirajSe } from "../redux/actions";
import { Row, Col, Card } from "react-bootstrap";

const Login = ({ inputLogina, promijeniInputLogina, logirajSe }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    logirajSe();
  };

  const handleChange = (event) => {
    promijeniInputLogina({ payload: event.target.value });
  };

  return (
    <Row className='vh-100 justify-content-center'>
      <Col md={6} className='align-self-center'>
        <Card className='px-5 py-5'>
          <form className='row justify-content-center' onSubmit={handleSubmit}>
            <h3 className='mb-4 text-center'>Odaberi ime</h3>

            <div className='row mb-4 text-center'>
              <input
                type='text'
                className='form-control text-center'
                placeholder='odaberi ime'
                value={inputLogina}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>
              Logiraj se
            </button>
          </form>
        </Card>
      </Col>
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    inputLogina: state.inputLogina,
  };
}

const mapDispatchToProps = {
  promijeniInputLogina,
  logirajSe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
