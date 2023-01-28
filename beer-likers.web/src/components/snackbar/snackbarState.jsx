import React from 'react';
import {observer} from "mobx-react-lite";
import snackbarStore from "../../store/snackbarStore.js";
import {Alert, Snackbar} from "@mui/material";

const SnackbarState = observer(() => {
    const handleClose = () => {
        snackbarStore.disable();
    };
    return (
        <div>
            <Snackbar open={snackbarStore.enabled}
                           autoHideDuration={3000}
                           onClose={handleClose}>
                <Alert severity={snackbarStore.severity} sx={{ width: '100%', fontWeight: 400, fontSize: "1.7rem" }}>
                    {snackbarStore.text}
                </Alert>
            </Snackbar>
        </div>
    );
});

export default SnackbarState;
