import React from "react";

import { Dialog, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table } from '@mui/material';

import { Gif } from "../../api/proxy";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';

import './GifDetailsStyles.scss';

type GifDetailsProps = {
    gif: Gif | undefined;
    showDetails: boolean;
    handleClose: (value: boolean) => void;
}

const GifDetailsComponent = ({ gif, showDetails, handleClose }: GifDetailsProps) => {

    const renderDetails = (gif: Gif) => {
        const image = gif?.images.original;

        return (
            <div className="detailContainer">
                <img src={image?.webp} width={image?.width} height={image?.height} />
                <div className="details">
                    <div className="title">
                        <h3>Gif Name:</h3>
                        <p>{gif.title}</p>
                    </div>
                    <Paper className="table">
                        <TableContainer>
                            <Table sx={{ minWidth: 250 }} arial-label="Gif Details">
                                <TableHead className="tableHead">
                                    <TableRow>
                                        <TableCell>Import Date</TableCell>
                                        <TableCell>Trending Date</TableCell>
                                        <TableCell>Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell scope="row">{gif.import_datetime}</TableCell>
                                        <TableCell scope="row">{gif.trending_datetime}</TableCell>
                                        <TableCell scope="row">{gif.rating}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
        );
    }

    return (
        <Dialog open={showDetails} maxWidth="md" className="dialog">
            <IconButton
                aria-label="Close gif details"
                className="closeBtn"
                onClick={() => handleClose(false)}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                {gif && renderDetails(gif)}
            </DialogContent>
        </Dialog>
    );
}

export default GifDetailsComponent;