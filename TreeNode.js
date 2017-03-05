/**
 *
 * Status table: use different number to separate different stages
 * 0 - start
 * 1 - greeting
 * 2 - service selecting
 * 3 - account information
 * 4 - technical support
 * 5 - product information
 * 6 — check balance
 * 7 - payment
 * 8 - problem 
 * 9 - ask for reboot
 * 10 - agent
 * 11 - try reboot
 * 12 - solve problem
 * 13 - product list
 * 14 - not found, try again
 * 404 - unrecognize speech  
 */

// var TreeNode = {
// 	createNew: function(status) {
// 		var node = {};
// 		node.parent;
// 		node.left;
// 		node.middle;
// 		node.right;
// 		node.status = status;
// 		node.getStatus() = function() {return node.status};
// 		return node;
// 	} 
// }

function TreeNode(status) {
    this.parent;  
    this.left;
    this.middle;
    this.right;
    this.status = status;
    this.getStatus = function () {
        return this.status;
    };
}

/**
 *
 * Status table: use different number to separate different stages
 * 1 - greeting  -- detect hello/hi
 * 2 - service selecting -- which service would you want?
 * 3 - account information -- which account service would you want?
 * 4 - technical support -- please descibe your problem
 * 5 - product information -- we now have [product list], which one would you want to buy？
 * 6 — check balance -- your balance now is XXXXX, would you want to pay for these balance?
 * 7 - payment -- please tell us your credit number
 * 8 - ask for reboot -- have you tried turning it off and no?
 * 9 - agent -- We will connect you to the next available technical agent
 * 10 - try reboot -- Try turning it off and on. Dit it work？
 * 11 - solve problem -- I’m glad I could help. Have a good day.
 * 12 - not found, try again -- we cannot find the item you say, please try again
 * 13 - end Thanks for your patient and calling, Have a good day!
 */

	// var greet_node = TreeNode.createNew(1);
	// var selection_node = TreeNode.createNew(2);
	// var acc_info_node = TreeNode.createNew(3);
	// var check_bal_node = TreeNode.createNew(6);
	// var pay_node = TreeNode.createNew(7);
	// var end_node = TreeNode.createNew(13);

	// var tech_supp_node = TreeNode.createNew(4);
	// var try_reboot_node = TreeNode.createNew(8);
	// var agent_node = TreeNode.createNew(9);
	// var reboot_test_node = TreeNode.createNew(10);
	// var solve_node = TreeNode.createNew(11);
	// var unsolve_node = TreeNode.createNew(9);

	// var prod_info_node = TreeNode.createNew(5);
	// var prod_pay_node = TreeNode.createNew(7);
	// var prod_not_found_node = TreeNode.createNew(13);

	// greet_node.left = acc_info_node;
	// greeting.middle = tech_supp_node;
	// greet_node.right = prod_info_node;

	// // account info branch
	// acc_info_node.parent = greet_node;
	// acc_info_node.left = check_bal_node;
	// acc_info_node.right = pay_node;

	// check_bal_node.parent = acc_info_node;
	// check_bal_node.left = pay_node;
	// check_bal_node.right = end_node;

	// pay_node.parent = acc_info_node;

	// // technical support branch
	// tech_supp_node.parent = greet_node;
	// tech_supp_node.left = try_reboot_node;

	// try_reboot_node.parent = tech_supp_node;
	// try_reboot_node.left = agent_node;
	// try_reboot_node.right = reboot_test_node;

	// try_reboot_node.left = solve_node;
	// try_reboot_node.right = unsolve_node;

	// // product info branch
	// prod_info_node.parent = greet_node;
	// prod_info_node.left = prod_pay_node;
	// prod_info_node.right = prod_not_found_node;

	// prod_not_found_node.parent = prod_info_node;






