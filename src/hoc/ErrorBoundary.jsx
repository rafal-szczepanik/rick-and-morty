import {Component} from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log('Error Boundary');
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {

      return (
        <div className="alert alert-danger">
          An error has occurred: {this.state.error.toString()}
        </div>
      );
    }
    return this.props.children;
  }
}