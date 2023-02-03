import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// This is a form component that I took from (https://react-bootstrap.netlify.app/forms/overview/#rb-docs-content)
// The component will take three props
// Add an input for each property of the object
function AddCarForm({ handleSubmit, formState, setFormState, display }) {
  let className = display ? "display" : "hide";
  return (
    // On submit add the handleSubmit property
    <Form className="add-car-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label className={className}>Make</Form.Label>
        <Form.Control
          // On change update the make property of the formState
          value={formState.make}
          onChange={(event) => {
            setFormState({ ...formState, make: event.target.value });
          }}
          type="text"
          placeholder="Enter make"
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={className}>Year</Form.Label>
        <Form.Control
          // On change update the model property of the formState
          value={formState.year}
          onChange={(event) =>
            setFormState({ ...formState, year: event.target.value })
          }
          type="number"
          placeholder="Enter year"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={className}>Registration</Form.Label>
        <Form.Control
          // On change update the max-speed property of the formState
          value={formState.registration}
          onChange={(event) =>
            setFormState({ ...formState, registration: event.target.value })
          }
          type="text"
          placeholder="registration"
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={className}>Owner</Form.Label>
        <Form.Control
          // On change update the year property of the formState
          value={formState.owner}
          onChange={(event) =>
            setFormState({ ...formState, owner: event.target.value })
          }
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={className}>Availability</Form.Label>
        <Form.Control
          // On change update the max-speed property of the formState
          value={formState.availability}
          onChange={(event) =>
            setFormState({
              ...formState,
              availability: event.target.value,
            })
          }
          type="boolean"
          placeholder="true / false"
          required
        />
        <Form.Text className={`text-muted ${className}`}>
          true / false
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={className}>Image URL</Form.Label>
        <Form.Control
          // On change update the image url property of the formState
          value={formState.image}
          onChange={(event) =>
            setFormState({ ...formState, image: event.target.value })
          }
          type="text"
          placeholder="Image URL"
          required
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddCarForm;
