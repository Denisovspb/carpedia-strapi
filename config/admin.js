module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c5b1f2e51eaf07cb4a130e6550885396'),
  },
});
