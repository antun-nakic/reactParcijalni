import React, { Component } from "react";
import { connect } from "react-redux";
import {
  osvjeziFilmove,
  promijeniInputLogina,
  ucitajPojedinacniFilm,
} from "../redux/actions";
import ListaFilmova from "../components/ListaFilmova";
import Film from "../components/Film";
import { Row, Col } from "react-bootstrap";

class Aplikacija extends Component {
  handleChange(event) {
    this.props.promijeniInputLogina({ payload: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.osvjeziFilmove(this.props.inputLogina);
  }

  render() {
    return (
      <>
        <Row className='justify-content-center'>
          <Col md={6} className='my-3'>
            <form
              className='row justify-content-center'
              onSubmit={(event) => this.handleSubmit(event)}>
              <div className='row mb-4 text-center'>
                <input
                  type='text'
                  placeholder='Unesite ime filma:'
                  className='form-control text-center'
                  value={this.props.inputLogina}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <input
                type='submit'
                className='btn btn-dark btn-lg btn-block'
                value='Pretraži'
              />
            </form>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={3} className='my-3 text-center'>
            <ListaFilmova
              filmovi={this.props.filmovi}
              ucitajPojedinacniFilm={(id) =>
                this.props.ucitajPojedinacniFilm(id)
              }
            />
          </Col>
          <Col md={3} className='my-3 text-center'>
            <Film odabraniFilm={this.props.odabraniFilm} />
          </Col>
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    filmovi: state.filmovi,
    inputLogina: state.inputLogina,
    odabraniFilm: state.odabraniFilm,
  };
}

const mapDispatchToProps = {
  osvjeziFilmove,
  promijeniInputLogina,
  ucitajPojedinacniFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Aplikacija);
