import { useStore } from "@/store/useStore";
import { Button, Container } from "@mui/material";

export default function Home() {
  const { navigate } = useStore()();

  function redirect() {
    navigate.push("/operation");
  }
  return (
    <>
      <Container>
        <h1>Tasi Galicia</h1>
        <Button variant="contained" onClick={() => redirect()}>
          Operation
        </Button>
      </Container>
    </>
  );
}
