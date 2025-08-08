import React from "react";
import { Outlet } from "react-router-dom";
import Docsidebar from "./Docsidebar";

function Doctormain() {
  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "#f8f9fa",
          borderRight: "1px solid #ddd",
          padding: "20px",
          zIndex: 1000,
        }}
      >
        <Docsidebar/>
      </div>

      {/* Right Content */}
      <div
        style={{
            marginLeft: "220px",
            marginRight:'-12px',
            padding: "30px",
            minHeight: "100vh",
            background:"url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0PDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDysZFRkrKystNysrKy03LS0tLSsrKy0rNy0rNys3KystKysrKysrKy0rKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAABAAIDBQYE/8QAGBABAQEBAQAAAAAAAAAAAAAAAAER8DH/xAAaAQEBAQEBAQEAAAAAAAAAAAABAAIDBAUG/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBAhL/2gAMAwEAAhEDEQA/APBIJ9x+dKCGlJJlBKhnSqEKCKzTWay1irNNZtDWCs02s0N4zWa1Wam8YrNarNTWCstVlNis0hNYyDQGhQQjgSQ10xJKBspIFJAp6QDU9r4RQQ1HQtDKOhC1nSgtZBhrNVoo1rBWaazWWsFZprNDeCs01mprBWK1Wam8FZpoqawVmmiprBQayGhUqE1iQI1rECKHQ6WVEikEXokyte18NpM6NGmNatZWsqHRotGsmGi0WgGG1m1Ws0NZh1m1M0RrMVZprNDWC1mq0BvBWabWU1irJrKaxClmprACARQaE0EkmsSqTLWakkmlqCSegWsrXtfHh1azq1nVGtGjWdBjWgaLWVDqtZ0WhqGijRoMNrNVrNoazFWbTaxaGsxCqs2hrFazTQm8AVCKrNNCawAhEUEUFAigogrWgUg2Ekk7vVrOjXrr5Ua1azq0KNaLRo0GNaNGjWVDaFo1GLRaNGhqG0WgWgxWs2q0UNZitZtVooaxUIVNKhBFVmmhFMlIgGgFAigpJLWsSSDWHvAki7bVrOrXor5sa1azo1VRrVrOrQo0tY0aDGtGjRophtFo1aDFotATUNrK0AoIIoFlNIVUIoJIoHQCEkihSAkRCtaCKDYRSTsNWsatdq8Eb1axq0VRrVrOrVTGtGjRoqjWgJGG0BaFEFoRQtQRVCSIoITQRCIRxYDGUcWIxlVrBgMCw4sTWYg1iwNRnCUjAiko+nVrOrW68Ua1azq0KNLWdWqqNatZ1alGtGs6kYbVoBR1BIxJINZyFYcOKtZyxhxrFgrecM4MbxYK3nLODG8WKnyxgxyYMFPljBjeLFV5YxNioxnDhSMGLEkokki1q0I14YdWhaqo1o0ako0tZJR1BJQpYlTmIoit5ypESq6Zyzhw4RXTOWcOHDgrWcsrGsWKtZyxixvFgp8sYMbxYqfLjxY3YMVHljFjeDFV5YxY0sVXlnFjWLEozhIVUcaZWmvA1q0alVCWdOmo6gSoTAYqcwmAwV0zkwxQit5ixEyCumYJDhMVbzkYcJxmumcs4saQrWcs4sbwYq15ZwY3gxDyxYMbwVVRmwY3gw0RjFjVgQjOLGghBgaSUfMlqL5qSSRQJRMZhRzGoRDIq3hjUZjUVdMwxoKBvMLQhkDpmGFNQOmYMakUhkDpmLFhWJvORiaxYGvLCxqwWFeWcGNVJnccdgbsFLO4wjgTMGDGkhGcRSUfGgmny2kkgiEkYYkW8ajUSDeGRoIN4Y0km8ahiQdcahiSdMahKDrypDiQbw4sCDasCSAsZSLIFSLOis0osMpJMrUkk//Z')",
            backgroundSize:"cover",
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <Outlet /> {/* Renders the selected child route */}
      </div>
    </>
  );
}

export default Doctormain;
