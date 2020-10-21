import React from "react";
const InputForPosts = ({ input, meta, ...props }) => {
    const styleObj = {
        color: "red",
        marginTop: "10px",
    };

    return (
        <div>
            <div>
                <input {...input} {...props} />
            </div>
            <div style={meta.error ? styleObj : {}}>{meta.error}</div>
        </div>
    );
};
export default InputForPosts;