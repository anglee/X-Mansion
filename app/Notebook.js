import _ from "lodash";
import React from "react";
import CodeCell from "./CodeCell";

export default React.createClass({
	getInitialState() {
		return {};
	},
	render: function () {
		const { cells } = this.props.model;
		return (
				<div>
					<header>Notebook</header>
					<pre className={ this.props.isDebugging ? "" : "hidden" }>
						state = {
							JSON.stringify(this.props.model)
						}
					</pre>
					<div>
						Loading Status: { this.props.loadingStatus }
					</div>
					{
						_.map(cells, (cell) => {
							return <CodeCell
									model={ cell }
									key={ cell.id }
									isDebugging={ this.props.isDebugging }>
							</CodeCell>
						})
					}
				</div>
		);
	},
});