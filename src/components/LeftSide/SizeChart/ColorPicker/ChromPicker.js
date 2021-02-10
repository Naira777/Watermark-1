import React from "react";
import { ChromePicker, SketchPicker } from "react-color";
import { setColor } from "../../../../redux/reducer";
import reactCSS from "reactcss";
import { connect } from "react-redux";



class Picker extends React.Component {
  state = {
    displayColorPicker: false,
    color: "#FF77E0",
    matches: window.matchMedia("(max-width: 768px)").matches,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
  };

  refreshColor() {
    this.props.setColor(this.state.color);
  }

  componentDidMount() {
    this.refreshColor();
  }

  componentDidUpdate(prevState) {
    if (this.state.color != prevState.color) {
      this.refreshColor();
    }
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "35px",
          height: "35px",
          borderRadius: "5px",
          background: `${this.state.color}`,
        },
        swatch: {
          padding: "1px",
          background: "#DEE3F0",
          borderRadius: "5px",
          boxShadow: "0 0 0 0.5px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },

        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });
    var inputStyles = {
      input: {
        border: 'none',
      },
      label: {
        fontSize: '12px',
        color: '#999',
      },
    };
    const stylesM = reactCSS({
      default: {
        color: {
          width: "45px",
          height: "40px",
          borderRadius: "5px",
          background: `${this.state.color}`,
        },
        swatch: {
          padding: "1px",
          background: "#DEE3F0",
          borderRadius: "5px",
          boxShadow: "0 0 0 0.5px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "1",
          left: "50px",
          top: "450px",
         
          
        },

        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          
        },
      },
    });

    return (
      <>
        {!this.state.matches && (
          <div>
            <div style={styles.swatch} onClick={this.handleClick}>
              <div style={styles.color} />
            </div>
            {this.state.displayColorPicker ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <ChromePicker
                  color={this.state.color}
                  onChange={this.handleChange}
                
                />
              </div>
            ) : null}
          </div>
        )}

        {this.state.matches && (
          <div>
            <div style={stylesM.swatch} onClick={this.handleClick}>
              <div style={stylesM.color} />
            </div>
            {this.state.displayColorPicker ? (
              <div style={stylesM.popover}>
                <div style={stylesM.cover} onClick={this.handleClose} />
                <ChromePicker
                  color={this.state.color}
                  onChange={this.handleChange}
                  width={350}
                 
                />
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  color: state.contentPage.color,
});

export default connect(mapStateToProps, { setColor })(Picker);
