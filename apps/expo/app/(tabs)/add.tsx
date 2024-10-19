import { KeyboardAvoidingView, Platform } from 'react-native'
import { Button, Input, XStack, YStack, Label, H3, Paragraph } from '@my/ui'
import { Stack } from 'expo-router'
import { Formik } from 'formik'
import * as Yup from 'yup'
import addItem from '../API/addItem'
import { useSQLiteContext } from 'expo-sqlite'
import AddItemSchema from '../API/schema/AddItem.schema'

const AddItem = () => {
  const db = useSQLiteContext()

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Formik
          initialValues={{
            brand: '',
            type: '',
            quantity: '',
            price: '',
          }}
          validationSchema={AddItemSchema}
          onSubmit={({ brand, type, quantity, price }) =>
            addItem(db, { brand, type, quantity, price })
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, resetForm }) => (
            <YStack
              width={'90%'}
              marginTop={'$8'}
              minHeight={'100%'}
              overflow="hidden"
              space="$2"
              margin="$3"
              padding="$2"
              paddingTop="$12"
            >
              <H3>Add Item</H3>

              <Label width={90} htmlFor="brand">
                Brand
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  id="brand"
                  onChangeText={handleChange('brand')}
                  onBlur={() => handleBlur('brand')}
                  componentName="brand"
                  flex={1}
                  size={'$4'}
                  placeholder={'Enter brand name...'}
                  value={values.brand}
                />
              </XStack>
              {errors.brand && touched.brand ? (
                <Paragraph color={'$red6Light'}>{errors.brand}</Paragraph>
              ) : null}

              <Label width={90} htmlFor="type">
                Type
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  onChangeText={handleChange('type')}
                  id="type"
                  flex={1}
                  size={'$4'}
                  placeholder={'Enter type...'}
                  value={values.type}
                />
              </XStack>
              {errors.type && touched.type ? (
                <Paragraph color={'$red6Light'}>{errors.type}</Paragraph>
              ) : null}

              <Label width={90} htmlFor="quantity">
                Quantity
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  onChangeText={handleChange('quantity')}
                  id="quantity"
                  flex={1}
                  size={'$4'}
                  placeholder={'Enter qunatity...'}
                  keyboardType="numeric"
                  value={values.quantity.toString()}
                />
              </XStack>

              {errors.quantity && touched.quantity ? (
                <Paragraph color={'$red6Light'}>{errors.quantity}</Paragraph>
              ) : null}

              <Label width={120} htmlFor="price">
                Price per piece
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  onChangeText={handleChange('price')}
                  id="price"
                  flex={1}
                  size={'$4'}
                  placeholder={'Enter price...'}
                  keyboardType="numeric"
                  value={values.price.toString()}
                />
              </XStack>
              {errors.price && touched.price ? (
                <Paragraph color={'$red6Light'}>{errors.price}</Paragraph>
              ) : null}

              <Button marginTop={'$12'} themeInverse onPress={() => handleSubmit()}>
                Add Item
              </Button>
            </YStack>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </>
  )
}

export default AddItem
