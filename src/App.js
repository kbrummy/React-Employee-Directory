import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper>
        <Header />
        {this.state.employees.map((employee) => (
          <EmployeeCard
            id={employee.id}
            name={employee.name}
            title={employee.title}
            birth={employee.birth}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
