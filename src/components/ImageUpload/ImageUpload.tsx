import { Button, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface ImageUploadProps {
  file: File | null;
  setFile: (file: File | null) => void;
  title: string;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

const ImageUpload = ({ file, setFile, title }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>();

  useEffect(() => {
    file && setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      setPreviewUrl(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "0.5rem 1rem",
        height: "200px",
        border: "solid 1px #9E9E9D",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Typography textAlign={"center"}>{title}</Typography>
      <div
        style={{
          height: "100px",
          backgroundColor: "#f5f5f5"
        }}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              borderRadius: "5px"
            }}
          >
            Không có ảnh nào được chọn
          </div>
        )}
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        fullWidth
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Select Image
        <VisuallyHiddenInput
          type="file"
          onChange={(event) =>
            handleFileChange(event as React.ChangeEvent<HTMLInputElement>)
          }
        />
      </Button>
    </div>
  );
};

export default ImageUpload;
