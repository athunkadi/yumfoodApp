const errorHandler = (err, req, res, next) => {
  const name = err.name || '';
  let status, error;
  
  switch (name) {
    case 'SequelizeValidationError':

    case 'SequelizeUniqueConstraintError':
      status = 400;
      error = err.errors.map(el => el.message).join(',');
      break;

    case 'InvalidID':
      status = 401;
      error = 'Error Not Found ID ( Vendor or Tag ) input';
      break;

    case 'InvalidIDmenu':
      status = 401;
      error = 'Error Not Found ID ( Menu )';
      break;

    case 'InvalidIdOrder':
      status = 401;
      error = 'Error Not Found ID ( Order or Customer ) input';
      break;

    case 'NotFound':
      status = 404;
      error = 'Error Not Found';
      break;

    default:
      status = 500;
      error = 'Internal server error';
  }

  res.status(status).json({
    error
  });

}

module.exports = errorHandler;