import * as yup from 'yup';
import {translate} from '../i18n';
// ^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$

yup.setLocale({
  mixed: {
    required: ({path}) =>
      translate('validation.required', {path: translate(`form.${path}`)}),
  },
  string: {
    length: ({path, length}) =>
      translate('validation.length', {
        path: translate(`form.${path}`),
        length,
      }),
    min: ({path, min}) =>
      translate('validation.minString', {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({path, max}) =>
      translate('validation.maxString', {
        path: translate(`form.${path}`),
        max,
      }),
    email: ({path}) =>
      translate('validation.email', {path: translate(`form.${path}`)}),
  },
  number: {
    min: ({path, min}) =>
      translate('validation.minNumber', {
        path: translate(`form.${path}`),
        min,
      }),
    max: ({path, max}) =>
      translate('validation.maxNumber', {
        path: translate(`form.${path}`),
        max,
      }),
  },
});

export const UserLoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const ForgetPasswordSchema = yup.object().shape({
  accountNumber: yup.string().required(),
  email: yup.string().required().email(),
});

export const OTPSchema = yup.object().shape({
  otp: yup.string().required(),
});
export const DisputeReasonSchema = yup.object().shape({
  disputeReason: yup.string().min(3).max(180).required(),
});

export const AccountStatementSchema = yup.object().shape({
  year: yup.string().required(),
});
// export const PersonalDonationApartment = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   apartment_number: yup.string().required(),
//   building_number: yup.string().required(),
//   floor_number: yup.string().required(),
//   photosList: yup.string().required(),
//   pickup_date: yup.string().required(),
// });
// export const PersonalDonationHouse = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   house_number: yup.string().required(),
//   photosList: yup.string().required(),
//   pickup_date: yup.string().required(),
// });
// export const UpdateInfoApartment = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   apartment_number: yup.string().required(),
//   building_number: yup.string().required(),
//   floor_number: yup.string().required(),
// });
// export const UpdateInfoHouse = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   house_number: yup.string().required(),
// });
// export const CheckoutApartment = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   apartment_number: yup.string().required(),
//   building_number: yup.string().required(),
//   floor_number: yup.string().required(),
//   paymentMethod: yup.string().required(),
// });
// export const CheckoutHouse = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   house_number: yup.string().required(),
//   paymentMethod: yup.string().required(),
// });

// export const CheckOutSchema = yup.object().shape({
//   first_name: yup.string().min(3).max(30).required(),
//   last_name: yup.string().min(3).max(30).required(),
//   email: yup.string().required().email(),
//   address_1: yup.string().max(30).required(),
//   address_2: yup.string(),
//   city: yup.string().max(30).required(),
//   state: yup.string().max(30).required(),
//   phone: yup.string().required().length(11),
// });

// export const SenderNameSchema = yup.object().shape({
//   sender_name: yup.string().min(3).max(30).required(),
//   sender_mobile: yup.string().required().length(11),
// });

// export const AccountInfoSchema = yup.object().shape({
//   user_pass: yup.string().min(6).required(),
//   first_name: yup.string().min(3).max(30).required(),
//   last_name: yup.string().min(3).max(30).required(),
//   user_email: yup.string().required().email(),
//   nickname: yup.string().max(30).required(),
//   display_name: yup.string().max(30).required(),
// });

// export const driverSchema = yup.object().shape({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   email: yup.string().required().email(),
//   phone: yup.string().required().length(11),
//   // photo: yup.object().required().shape({
//   //   uri: yup.string().url(),
//   // }),
//   photo: yup.string().required(),
//   front_identity_card: yup.string().required(),
//   back_identity_card: yup.string().required(),
//   front_driver_licence: yup.string().required(),
//   back_driver_licence: yup.string().required(),
//   police_clearance_certificate: yup.string().required(),
//   medical_report: yup.string().required(),
// });

// export const ShippingSchema = yup.object().shape({
//   first_name: yup.string().required().min(2).max(30),
//   last_name: yup.string().required(),
//   phone: yup.string().required().length(11),
//   street_address: yup.string().required(),
//   partment_number: yup.string().required(),
//   area_id: yup.number().required(),
// });

// export const ForgotPasswordSchema = yup.object().shape({
//   phone: yup.string().required().length(11),
// });

// export const VerificationSchema = yup.object().shape({
//   first_Number: yup.string().required().max(1),
//   second_Number: yup.string().required().max(1),
//   third_Number: yup.string().required().max(1),
//   fourt_Number: yup.string().required().max(1),
// });
// export const NewPasswordSchema = yup.object().shape({
//   password: yup.string().required(),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], translate("validation.confirmPasswordNotMatch"))
//     .required(),
// });
// export const SupportSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().required().email(),
//   phone: yup.string().required().length(11),
//   subject: yup.string().required(),
//   message: yup.string().required(),
// });
// export const updateUserSchema = yup.object().shape({
//   name: yup.string().required().min(2).max(30),
//   email: yup.string().required().email(),
//   phone: yup.string().required().length(11),
//   address: yup.string().required(),
//   // area_id: yup.string().required(),
// });
// export const ChangePasswordSchema = yup.object().shape({
//   old_password: yup.string().required(),
//   password: yup.string().required(),
//   password_confirmation: yup
//     .string()
//     .oneOf([yup.ref("password"), null], translate("validation.confirmPasswordNotMatch"))
//     .required(),
// });

// export const AddPetSchema = yup.object().shape({
//   name: yup.string().required().min(3).max(30),
//   license_number: yup.string().required().min(2).max(30),
//   color_id: yup.string().required(),
//   gender_id: yup.string().required(),
//   pet_type_id: yup.string().required(),
//   breed_id: yup.string().required(),
//   status: yup.string().required(),
//   pedigree: yup.string().required(),
//   age: yup.string().required(),

//   flesh_marks: yup.string().required(),
//   medical_history: yup.string().required(),
// });

// export const ContactUsSchema = yup.object().shape({
//   name: yup.string().required().min(2).max(30),
//   email: yup.string().required().email(),
//   mobile: yup.string().required().length(11),
//   message: yup.string().required(),
// });

// export const BankAccountSchema = yup.object().shape({
//   account_number: yup.string().required().length(19),
//   ipan: yup.string().required().length(11),
//   branch_name: yup.string().required(),
//   branch_address: yup.string().required(),
//   zip_code: yup.string().required().length(6),
//   name_in_bank: yup.string().required(),
// });
// export const VehicleInfo3Schema = yup.object().shape({
//   engine_serial_number: yup.string().required(),
//   chassis_number: yup.string().required(),
//   license_plate: yup.string().required(),
// });
// export const VehicleInfo2Schema = yup.object().shape({
//   vehicle_type_id: yup.number().required(),
//   brand_id: yup.number().required(),
//   model_id: yup.number().required(),
//   color_id: yup.number().required(),
//   model_year: yup.number().required(),
// });
// export const VehicleInfo4Schema = yup.object().shape({
//   front_vehicle_license: yup.string().required(),
//   back_vehicle_license: yup.string().required(),
//   technical_report: yup.string().required(),
//   vehicle_photos: yup.string().required(),
// });
