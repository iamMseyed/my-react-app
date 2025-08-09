import { useState, useEffect } from "react";
import InputFieldAPI from "./InputFieldAPI"; // Import the InputFieldAPI component
import "./App.css";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInputFieldAPIs, setShowInputFieldAPIs] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    status: "",
    tags: [],
  }); 
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://shrimo.com/fake-api/todos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  // when alterring the field this will be called
  

  const handleAddRow = () => {
    setShowInputFieldAPIs(true);
    setNewTodo({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      status: "",
      tags: "",
    });
    setIsEditing(false);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const todoData = {
        ...newTodo,
        tags: newTodo.tags.split(",").map((tag) => tag.trim()),
      };

      const response = isEditing
        ? await fetch(`https://shrimo.com/fake-api/todos/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoData),
          })
        : await fetch("https://shrimo.com/fake-api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todoData),
          });

      if (!response.ok) {
        throw new Error("Failed to save the todo");
      }

      const result = await response.json();
      setData((prevData) =>
        isEditing
          ? prevData.map((todo) => (todo._id === editId ? result : todo))
          : [...prevData, result]
      );

      setShowInputFieldAPIs(false);
      setNewTodo({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "",
        tags: "",
      });

      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setShowInputFieldAPIs(false);
    setNewTodo({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      status: "",
      tags: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (id) => {
    const todoToEdit = data.find((todo) => todo._id === id);
    // console.log('duedate: '+todoToEdit.dueDate);
    // console.log('dueDate1'+todoToEdit.dueDate.split('T')[0]);
    const datePart = todoToEdit.dueDate ? todoToEdit.dueDate.split("T")[0] : ""; // Extract date part of the dueDate if available

    setNewTodo({
      title: todoToEdit.title,
      description: todoToEdit.description,
      dueDate: datePart,
      priority: todoToEdit.priority,
      status: todoToEdit.status,
       tags: Array.isArray(todoToEdit.tags) ? todoToEdit.tags.join(", ") : "",
    });

    setIsEditing(true);
    setEditId(id);
    setShowInputFieldAPIs(true);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://shrimo.com/fake-api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      setData((prevData) => prevData.filter((todo) => todo._id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Data Received from Fake API</h1>
        {showInputFieldAPIs && (
          <>
            <button id="save" onClick={handleSave}>
              Save
            </button>
            <button id="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}
        <button id="create" onClick={handleAddRow}>
          Add Row
        </button>
      </div>

      {showInputFieldAPIs && (
        <div className="InputFieldAPI-fields">
          <InputFieldAPI
            type="text"
            placeholder="Enter title"
            name="title"
            value={newTodo.title}
            onChange={handleChange}
          />
          <InputFieldAPI
            type="text"
            placeholder="Enter description"
            name="description"
            value={newTodo.description}
            onChange={handleChange}
          />
          <InputFieldAPI
            type="date"
            placeholder="Enter due date"
            name="dueDate"
            value={newTodo.dueDate}
            onChange={handleChange}
          />
          <InputFieldAPI
            type="text"
            placeholder="Enter priority"
            name="priority"
            value={newTodo.priority}
            onChange={handleChange}
          />
          <InputFieldAPI
            type="text"
            placeholder="Enter status"
            name="status"
            value={newTodo.status}
            onChange={handleChange}
          />
          <InputFieldAPI
            type="text"
            placeholder="Enter tags (comma separated)"
            name="tags"
            value={newTodo.tags}
            onChange={handleChange}
          />
        </div>
      )}
      {/* show data */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Tag(s)</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
            <th colSpan="2" className="txtCenter">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>{Array.isArray(post.tags) ? post.tags.join(", ") : ""}</td>
                <td>{post.description}</td>
                <td>{post.dueDate ? post.dueDate.split("T")[0] : ""}</td>
                <td>{post.priority}</td>
                <td>{post.status}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(post._id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffect;
