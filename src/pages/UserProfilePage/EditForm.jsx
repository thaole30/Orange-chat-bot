import React from 'react'
import AntdInput from '../../components/FormControl/AntdInput/AntdInput';
import SharedForm from './SharedForm';

const EditForm = () => {
  return (
    <>
        <SharedForm isEditable={true}>
          <div className="new-password-inputs">
            <AntdInput
              type="password"
              disabled={false}
              style={{marginTop: '8px'}}
            />
            <AntdInput
              type="password"
              disabled={false}
              style={{marginTop: '8px'}}
            />
          </div>
        </SharedForm>
    </>
  )
}

export default EditForm