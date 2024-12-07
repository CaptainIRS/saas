import { Button, Box, Group } from "@mantine/core";
import { useState } from "react";
import { TextInput } from "@mantine/core";
import classes from "./index.module.css";
import { useRouter } from 'next/navigation'

export default function IndexPage() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const floating = value.trim().length !== 0 || focused || undefined;
  const router = useRouter()
  return (
    <Group justify="center">
      <Box>
        <TextInput
          label="Token Name"
          placeholder="The next big thing in the cryptosphere..."
          required
          classNames={classes}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="md"
          autoComplete="nope"
          data-floating={floating}
          labelProps={{ "data-floating": floating }}
        />
        <Group mt={20} justify="center">
          <Button onClick={() => router.push('/create')}>Create</Button>
        </Group>
      </Box>
    </Group>
  );
}
