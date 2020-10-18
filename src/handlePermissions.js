import { PermissionsAndroid, Platform } from "react-native";

const isAuthorized = (granted) => {
  // On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest,
  // so check and request should always be true.
  // https://github.com/facebook/react-native-website/blob/master/docs/permissionsandroid.md

  return Platform.Version >= 23
    ? granted === PermissionsAndroid.RESULTS.GRANTED
    : granted === true;
};

export const requestPermissions = async (
  permissionDialogTitle,
  permissionDialogMessage
) => {
  if (Platform.OS === "android") {
    let granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (isAuthorized(granted)) {
      return true;
    }
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: permissionDialogTitle,
        message: permissionDialogMessage,
      }
    );
    return isAuthorized(granted);
  }
  return true;
};
