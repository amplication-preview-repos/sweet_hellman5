import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CommentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
