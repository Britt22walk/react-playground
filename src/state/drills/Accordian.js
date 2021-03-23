import React, { Component } from "react";

export default class Accordian extends Component {
  static defaultProps = {
    sections: [],
  };
  state = {
    activeSectionIndex: null,
  };

  handleSetActiveSection = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex });
  };

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className="Accordian_item" key={idx}>
        <button type="button" onClick={() => this.handleSetActiveSection(idx)}>
          {section.title}
        </button>
        {activeSectionIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { activeSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <ul className="Accordian">
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    );
  }
}
