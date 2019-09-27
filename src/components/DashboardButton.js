import React from 'react'
import Button from "@material-ui/core/Button"

function DashboardButton({ children }) {
    return (
        <Button variant="outlined" color="primary" size="large" fullWidth>
            {children}
        </Button>
    );
}

export default DashboardButton;