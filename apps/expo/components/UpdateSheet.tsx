import React, { useState } from 'react'
import { Sheet, XStack, Paragraph, YStack, Label, Input, H3, Button } from '@my/ui';
import { Formik } from 'formik';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AddItemSchema from '../API/schema/AddItem.schema';
import updateItem from '../API/updateItem';
import { useSQLiteContext } from 'expo-sqlite';


const UpdateSheet = ({ open, setOpen, item }) => {
  const [position, setPosition] = useState(0)
  const db = useSQLiteContext();

  return (
    <Sheet
      modal
      animation="medium"
      open={open}
      onOpenChange={setOpen}
      snapPoints={[80]}
      position={position}
      onPositionChange={setPosition}
      dismissOnSnapToBottom
  >
    <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
    <Sheet.Handle bg="$gray8" />
    <Sheet.Frame jc="flex-start" gap="$10" bg="$color2">
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Formik
          initialValues={{
            brand: item["item"]["brand"],
            type: '',
            quantity: '',
            price: '',
          }}
          validationSchema={AddItemSchema}
          onSubmit={({ brand, type, quantity, price }) =>
            {
              // console.log({ brand, type, quantity, price })
              // updateItem(db, { brand, type, quantity, price, id: item["item"]["id"]})
            }
          }
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, resetForm }) => (
            <YStack
              width={'90%'}
              minHeight={'100%'}
              overflow="hidden"
              space="$2"
              margin="$3"
              padding="$2"
            >
              <H3>Update Item</H3>

              <Label width={90} htmlFor="brand">
                Brand
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  id="brand"
                  onChangeText={handleChange('brand')}
                  onBlur={() => handleBlur('brand')}
                  flex={1}
                  size={'$4'}
                  placeholder={item["item"]["brand"]}
                  value={values.brand}
                  defaultValue={item['item']["brand"]}
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
                  placeholder={item["item"]["type"]}
                  value={values.type}
                  defaultValue={item["item"]["type"]}
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
                  placeholder={item["item"]["quantity"].toString()}
                  keyboardType="numeric"
                  value={values.quantity.toString()}
                  defaultValue={item["item"]["quantity"]}
                />
              </XStack>

              {errors.quantity && touched.quantity ? (
                <Paragraph color={'$red6Light'}>{errors.quantity}</Paragraph>
              ) : null}

              <Label width={120}>
                Price per piece
              </Label>
              <XStack alignItems="center" space="$2">
                <Input
                  onChangeText={handleChange('price')}
                  id="price"
                  flex={1}
                  size={'$4'}
                  placeholder={item["item"]["price"].toString()}
                  keyboardType="numeric"
                  value={values.price.toString()}
                  defaultValue={item["item"]["price"]}
                />
              </XStack>
              {errors.price && touched.price ? (
                <Paragraph color={'$red6Light'}>{errors.price}</Paragraph>
              ) : null}

              <Button marginTop={'$12'} themeInverse onPress={() => handleSubmit()}>
                Update
              </Button>
            </YStack>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Sheet.Frame>
  </Sheet>
  )
}

export default UpdateSheet