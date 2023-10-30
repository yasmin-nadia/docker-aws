import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateDiscountHook from "../hooks/admin/useUpdateDiscount";

const Updatediscount = () => {
    const { title } = useParams();
    const { createPost, loading } = useUpdateDiscountHook(title);

    const [productTitle, setProductTitle] = useState("");
    // Other state variables for the discount properties
    const [discountType, setDiscountType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [valid, setValid] = useState(false);

    const formStyles = {
        maxWidth: "400px",
        margin: "0 auto",
    };

    const inputContainerStyles = {
        marginBottom: "15px",
    };

    const labelStyles = {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
    };

    const inputStyles = {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        marginBottom: "5px",
    };

    const submitButtonStyles = {
        backgroundColor: "#734d26",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // Prepare the discount data object
        const discountData = {
            discountType,
            startDate,
            endDate,
            percentage,
            valid,
            title: productTitle
        };

        createPost(discountData);
    };

    return (
        <div>
            <h1>Update discount</h1>
            {loading === true && <h4>Loading...</h4>}

            <form style={formStyles} onSubmit={handleUpdateSubmit}>
               
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Discount Type:</label>
                    <input
                        type="text"
                        label="discountType"
                        placeholder="input discount type"
                        onChange={(e) => setDiscountType(e.target.value)}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Start Date:</label>
                    <input
                        type="datetime-local"
                        label="startDate"
                        onChange={(e) => setStartDate(e.target.value)}
                        style={inputStyles}
                    />
                </div>

                <div style={inputContainerStyles}>
                    <label style={labelStyles}>End Date:</label>
                    <input
                        type="datetime-local"
                        label="endDate"
                        onChange={(e) => setEndDate(e.target.value)}
                        style={inputStyles}
                    />
                </div>
                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Percentage:</label>
                    <input
                        type="number"
                        label="percentage"
                        placeholder="Input percentage (e.g., 70)"
                        onChange={(e) => setPercentage(parseFloat(e.target.value))}
                        style={inputStyles}
                    />
                </div>

                <div style={inputContainerStyles}>
                    <label style={labelStyles}>Valid:</label>
                    <select
                        label="valid"
                        onChange={(e) => setValid(e.target.value === 'true')}
                        style={inputStyles}
                    >
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>


                <button
                    type="button"
                    onClick={handleUpdateSubmit}
                    style={submitButtonStyles}
                >
                    Update Discount
                </button>
            </form>
        </div>
    );
};

export default Updatediscount;
