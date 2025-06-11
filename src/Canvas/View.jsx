import React from "react";

const CenteredContainer = ({ children, style }) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            background: "transparent",
            ...style,
        }}
    >
        <div
            style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                minWidth: "95vw",
                minHeight: "90vh",
            }}
        >
            {children}
        </div>
    </div>
);

export default CenteredContainer;