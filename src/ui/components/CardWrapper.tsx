import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";

interface CardWrapperProps {
  title: string;
  subtitle?: string;
  content?: ReactNode;
  action?: ReactNode;
  media?: string;
}
const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  subtitle,
  content,
  action,
  media,
}) => {
  return (
    <Card>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <CardMedia component="img" image={media} alt={title} />
      <CardContent>{content}</CardContent>
      <CardActions>{action}</CardActions>
    </Card>
  );
};

export default CardWrapper;
