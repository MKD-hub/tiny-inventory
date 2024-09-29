import * as Yup from 'yup'

const AddItemSchema = Yup.object().shape({
  brand: Yup.string().required('Required!'),
  type: Yup.string().required('Required!'),
  quantity: Yup.number().required('Required'),
  price: Yup.number().required('Required!'),
})

export default AddItemSchema
