// import { Alert, Button, Linking, View } from "react-native";
// import React from "react";
// import {Text} from "react-native-paper";
// import { usePhone } from "@/hooks/usePhone";

// const HomeDemo = () => {
//   // function callMe(){
//   //   const MyPhone = 'tel:*712*613673734*1#' //😉
//   //   try{
//   //     Linking.openURL(MyPhone)
//   //   }catch(error){
//   //     Alert.alert('ERROR HAPPENED', `${error}`)
//   //   }
//   // }
  
//   return (
//     <View>
//       <Text variant="displayLarge">HomeDemo</Text>
//       <Button title="Call me" onPress={() => usePhone('tel:*712*613673734*1#')}/>
//     </View>
//   );
// };

// export default HomeDemo;




import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

const AdminForms = () => {
  const [companyImage, setCompanyImage] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [serviceImage, setServiceImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceInfo, setServiceInfo] = useState("");
  const [serviceType, setServiceType] = useState("");

  const pickImage = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddCompany = () => {
    console.log("Company Added:", { companyImage, companyName });
    // Add logic to store the company data
  };

  const handleAddService = () => {
    console.log("Service Added:", { serviceImage, serviceName });
    // Add logic to store the service data
  };

  const handleAddServiceDetails = () => {
    console.log("Service Details Added:", { servicePrice, serviceInfo, serviceType });
    // Add logic to store the service details
  };

  return (
    <ScrollView style={styles.container}>
      {/* Form 1: Add Company */}
      <Text style={styles.heading}>Add Company</Text>
      <View style={styles.form}>
        <Button title="Pick Company Image" onPress={() => pickImage(setCompanyImage)} />
        {companyImage && <Image source={{ uri: companyImage }} style={styles.image} />}
        <TextInput
          style={styles.input}
          placeholder="Name of Company"
          value={companyName}
          onChangeText={setCompanyName}
        />
        <Button title="Add Company" onPress={handleAddCompany} color="#007BFF" />
      </View>

      {/* Form 2: Add Service */}
      <Text style={styles.heading}>Add Service</Text>
      <View style={styles.form}>
        <Button title="Pick Service Image" onPress={() => pickImage(setServiceImage)} />
        {serviceImage && <Image source={{ uri: serviceImage }} style={styles.image} />}
        <TextInput
          style={styles.input}
          placeholder="Name of Service"
          value={serviceName}
          onChangeText={setServiceName}
        />
        <Button title="Add Service" onPress={handleAddService} color="#28A745" />
      </View>

      {/* Form 3: Add Service Details */}
      <Text style={styles.heading}>Add Service Details</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Price of Package"
          value={servicePrice}
          onChangeText={setServicePrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Information of Service"
          value={serviceInfo}
          onChangeText={setServiceInfo}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Type of Service"
          value={serviceType}
          onChangeText={setServiceType}
        />
        <Button title="Add Service Details" onPress={handleAddServiceDetails} color="#FFC107" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default AdminForms;

