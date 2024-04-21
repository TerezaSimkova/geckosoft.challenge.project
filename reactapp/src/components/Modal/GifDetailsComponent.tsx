import React from "react";
import Dialog from '@mui/material/Dialog';
import { Gif } from "../../api/proxy";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';

type GifDetailsProps = {
    gif: Gif | undefined;
    showDetails: boolean;
    handleClose: (value: boolean) => void;
}

const GifDetailsComponent = ({ gif, showDetails, handleClose }: GifDetailsProps) => {

    const renderDetails = (gif: Gif) => {
        const image = gif?.images.original;

        return (
            <div>
                <img src={image?.webp} width={image?.width} height={image?.height} />
                <span>Gif Name:</span><p>{gif.title}</p>
                <span>Import Date:</span><p>{gif.import_datetime}</p>
                <span>Trending Date:</span><p>{gif.trending_datetime}</p>
                <span>Content Rating:</span><p>{gif.rating}</p>
            </div>
        );
    }

    return (
        <Dialog open={showDetails}>
            <IconButton
                aria-label="Close gif details"
                onClick={() => handleClose(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
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