import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <Box p={4} minHeight="100vh" bg={bgColor}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading size="xl" color={textColor}>
          Notes App
        </Heading>
        <Button onClick={toggleColorMode}>Toggle Theme</Button>
      </Flex>
      <Stack spacing={4} mb={8}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button leftIcon={<FaPlus />} onClick={addNote} colorScheme="teal">
          Add Note
        </Button>
      </Stack>
      <Stack spacing={4}>
        {notes.map((note, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md">
            <Flex justify="space-between" align="center">
              <Heading size="md">{note.title}</Heading>
              <Button size="sm" leftIcon={<FaTrash />} onClick={() => deleteNote(index)} colorScheme="red">
                Delete
              </Button>
            </Flex>
            <Text mt={2}>{note.content}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
