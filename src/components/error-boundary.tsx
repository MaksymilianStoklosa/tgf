import React, { Component } from "react";

enum ErrorKey {
  CHUNK = "chunk_failed",
  OTHER = "other",
}
interface ErrorBoundaryState {
  hasError: boolean;
  shouldShowLoader: boolean;
}

class ErrorBoundaryErrors {
  static isChunkError(error?: Error) {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;

    return error?.message && chunkFailedMessage.test(error.message);
  }
}

export class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    shouldShowLoader: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true, shouldShowLoader: true };
  }

  shouldReloadPage(errorKey: ErrorKey) {
    const chunkFailedTimestamp = sessionStorage.getItem(errorKey);

    if (!chunkFailedTimestamp || new Date().getTime() > +chunkFailedTimestamp) {
      return true;
    }

    return false;
  }

  reloadPage(errorKey: ErrorKey) {
    if (this.shouldReloadPage(errorKey)) {
      sessionStorage.setItem(errorKey, String(new Date().getTime() + 10000));
      window.location.reload();
    }
  }

  componentDidCatch(error: Error) {
    if (ErrorBoundaryErrors.isChunkError(error)) {
      this.setState({ shouldShowLoader: this.shouldReloadPage(ErrorKey.CHUNK) });
      this.reloadPage(ErrorKey.CHUNK);
    } else {
      this.setState({ shouldShowLoader: false });
      console.error(error, "ErrorBoundary");
    }
  }

  render() {
    if (this.state.hasError && this.state.shouldShowLoader) {
      return "Loading...";
    } else if (this.state.hasError) {
      return <div>Something went wrong, please refresh your page</div>;
    }

    return this.props.children;
  }
}
