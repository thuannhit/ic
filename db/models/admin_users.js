'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin_users = sequelize.define('admin_users', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_display_name: {
      allowNull: true,
      type: Sequelize.STRING
    },
    user_status: {
      allowNull: false,
      defaultValue: 'ACTIVE',
      type: Sequelize.STRING
    },
    user_address: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_photo: {
      allowNull: true,
      type: Sequelize.STRING
    },
    user_gender: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_bank_account_number: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_bank_account_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_bank_account_number: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_bank_account_branch_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_current_money_amount: {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER
    },
    user_email: {
      allowNull: true,
      type: Sequelize.STRING
    },
    user_created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    user_updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  admin_users.associate = function(models) {
    // associations can be defined here
  };
  return admin_users;
};