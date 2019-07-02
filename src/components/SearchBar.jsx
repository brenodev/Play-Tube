import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";

class SearchBar extends Component {

//pesquisa o termo e retorna o resultado
researchTerm = e => {
  const term = e.target.value
  if (e.keyCode === 13) {
    console.log(term)
  }
}

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input 
            icon="search" 
            size="large" 
            placeholder="Search ..." 
            onKeyDown={(e) => this.researchTerm(e)}
          />
        </Segment>
      </div>
    );
  }
}

export default SearchBar;
