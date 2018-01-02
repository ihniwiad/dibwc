// dib elections tool

( function( $, Utils ) {

	var electionConfig = {
		"Vorstand": [
			{
				"name": "Vorsitzende",
				"count": 2
			},
			{
				"name": "Schatzmeister*in",
				"count": 1
			},
			{
				"name": "weitere Mitglieder",
				"count": "variable",
				"countVariable": true,
				"overall": true
			}
		],
		"Schiedsgericht": [
			{
				"name": "Richter*innen",
				"count": 3
			},
			{
				"name": "Ersatzrichter*innen",
				"count": 2,
				"overall": true
			}
		],
		"Kassenprüfer*innen": [
			{
				"name": "Kassenprüfer*innen",
				"count": 2
			}
		]
	};

	// TEST – TODO: remove
	var currentElectionPreset;

	var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
	var url = new URL( document.location.href );
	var preset = url.searchParams.get( 'preset' );
	
	if ( preset == 2 ) {
		// TEST (test configuration joint and single election) – TODO: remove
		currentElectionPreset = {
			"Vorstand": [
				{
					"name": "Vorsitzende",
					"count": 2,
					"joint": true,
					"candidates": [
						{
							"candidate": {
								"name": "Lina Limone",
								"female": true,
								"diverse": false
							},
							"yes": 18,
							"no": 2
						},
						{
							"candidate": {
								"name": "Manfred Mango",
								"female": false,
								"diverse": false
							},
							"yes": 12,
							"no": 1
						},
						{
							"candidate": {
								"name": "Olivia Orange",
								"female": true,
								"diverse": true
							},
							"yes": 12,
							"no": 0
						}
					]
				},
				{
					"name": "Schatzmeister*in",
					"count": 1,
					"candidates": [
						{
							"candidate": {
								"name": "Anna Ananas",
								"female": true,
								"diverse": true
							},
							"yes": 12,
							"no": 4
						},
						{
							"candidate": {
								"name": "Cora Cocos",
								"female": true,
								"diverse": false
							},
							"yes": 7,
							"no": 1
						}
					]
				},
				{
					"name": "weitere Mitglieder",
					"count": 3,
					"countVariable": true,
					"overall": true,
					"joint": false,
					"candidates": [
						[
							{
								"candidate": {
									"name": "Maria Maracuja",
									"female": true,
									"diverse": true
								},
								"yes": 12,
								"no": 0
							},
							{
								"candidate": {
									"name": "Bernard Banane",
									"female": false,
									"diverse": false
								},
								"yes": 12,
								"no": 1
							}
						],
						[
							{
								"candidate": {
									"name": "Kira Kirsch-Banane",
									"female": true,
									"diverse": false
								},
								"yes": 18,
								"no": 2
							},
							{
								"candidate": {
									"name": "Alfred Apfel",
									"female": false,
									"diverse": true
								},
								"yes": 11,
								"no": 3
							},
							{
								"candidate": {
									"name": "Anna Ananas",
									"female": true,
									"diverse": true
								},
								"yes": 12,
								"no": 4
							},
							{
								"candidate": {
									"name": "Cora Cocos",
									"female": true,
									"diverse": false
								},
								"yes": 7,
								"no": 1
							}
						],
						[
							{
								"candidate": {
									"name": "Kilian Kiwi",
									"female": false,
									"diverse": true
								},
								"yes": 7,
								"no": 0
							},
							{
								"candidate": {
									"name": "Mandy Mandarine",
									"female": true,
									"diverse": true
								},
								"yes": 8,
								"no": 2
							},
							{
								"candidate": {
									"name": "Melly Melone",
									"female": true,
									"diverse": false
								},
								"yes": 15,
								"no": 3
							}
						]
					]
				}
			]
		};
	}
	else if ( preset == 1 ) {
		// TEST (test configuration joint election) – TODO: remove
		currentElectionPreset = {
			"Vorstand": [
				{
					"name": "Vorsitzende",
					"count": 2,
					"joint": true,
					"candidates": [
						{
							"candidate": {
								"name": "Lina Limone",
								"female": true,
								"diverse": false
							},
							"yes": 18,
							"no": 2
						},
						{
							"candidate": {
								"name": "Manfred Mango",
								"female": false,
								"diverse": false
							},
							"yes": 12,
							"no": 1
						},
						{
							"candidate": {
								"name": "Olivia Orange",
								"female": true,
								"diverse": true
							},
							"yes": 12,
							"no": 0
						}
					],
					"results": [
						{
							"candidate": {
								"name": "Lina Limone",
								"female": true,
								"diverse": false
							}
						},
						{
							"candidate": {
								"name": "Manfred Mango",
								"female": false,
								"diverse": false
							}
						}
					]
				},
				{
					"name": "Schatzmeister*in",
					"count": 1,
					"candidates": [
						{
							"candidate": {
								"name": "Kilian Kiwi",
								"female": false,
								"diverse": true
							},
							"yes": 7,
							"no": 0
						},
						{
							"candidate": {
								"name": "Mandy Mandarine",
								"female": true,
								"diverse": true
							},
							"yes": 8,
							"no": 2
						},
						{
							"candidate": {
								"name": "Melly Melone",
								"female": true,
								"diverse": false
							},
							"yes": 15,
							"no": 3
						}
					],
					"results": [
						{
							"candidate": {
								"name": "Melly Melone",
								"female": true,
								"diverse": false
							}
						}
					]
				},
				{
					"name": "weitere Mitglieder",
					"count": 3,
					"countVariable": true,
					"overall": true,
					"joint": true,
					"candidates": [
						{
							"candidate": {
								"name": "Maria Maracuja",
								"female": true,
								"diverse": true
							},
							"yes": 12,
							"no": 0
						},
						{
							"candidate": {
								"name": "Bernard Banane",
								"female": false,
								"diverse": false
							},
							"yes": 12,
							"no": 1
						},
						{
							"candidate": {
								"name": "Kira Kirsch-Banane",
								"female": true,
								"diverse": false
							},
							"yes": 18,
							"no": 2
						},
						{
							"candidate": {
								"name": "Alfred Apfel",
								"female": false,
								"diverse": true
							},
							"yes": 11,
							"no": 3
						},
						{
							"candidate": {
								"name": "Anna Ananas",
								"female": true,
								"diverse": true
							},
							"yes": 12,
							"no": 4
						},
						{
							"candidate": {
								"name": "Cora Cocos",
								"female": true,
								"diverse": false
							},
							"yes": 7,
							"no": 1
						}
					]
				}
			],
			"Schiedsgericht": [
				{
					"name": "Richter*innen",
					"count": 3,
					"joint": true,
					"candidates": [
						{
							"candidate": {
								"name": "Pablo Papaya",
								"female": false,
								"diverse": true
							},
							"yes": 8,
							"no": 0
						},
						{
							"candidate": {
								"name": "Lydia Litschi",
								"female": false,
								"diverse": false
							},
							"yes": 5,
							"no": 1
						},
						{
							"candidate": {
								"name": "Eduard Erdbeere",
								"female": true,
								"diverse": true
							},
							"yes": 7,
							"no": 0
						}
					]
				},
				{
					"name": "Ersatzrichter*innen",
					"count": 2,
					"joint": true,
					"overall": true,
					"candidates": [
						{
							"candidate": {
								"name": "Holly Holunder",
								"female": true,
								"diverse": false
							},
							"yes": 15,
							"no": 1
						},
						{
							"candidate": {
								"name": "Hila Himbeere",
								"female": true,
								"diverse": true
							},
							"yes": 9,
							"no": 0
						}
					]
				}
			]
		};
	}

	// TEST – TODO: remove
/*
	var testElectionResult = {
		"Vorstand": [
			{
				"name": "Vorsitzende",
				"count": 2,
				"joint": true,
				"candidates": [
					{
						"candidate": {
							"name": "Lina Limone",
							"female": true,
							"diverse": false
						},
						"yes": 18,
						"no": 2
					},
					{
						"candidate": {
							"name": "Manfred Mango",
							"female": false,
							"diverse": false
						},
						"yes": 12,
						"no": 1
					},
					{
						"candidate": {
							"name": "Olivia Orange",
							"female": true,
							"diverse": true
						},
						"yes": 12,
						"no": 0
					}
				],
				"results": [
					{
						"candidate": {
							"name": "Lina Limone",
							"female": true,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Manfred Mango",
							"female": false,
							"diverse": false
						}
					}
				]
			},
			{
				"name": "Schatzmeister*in",
				"count": 1,
				"candidates": [
					{
						"candidate": {
							"name": "Kilian Kiwi",
							"female": false,
							"diverse": true
						},
						"yes": 7,
						"no": 0
					},
					{
						"candidate": {
							"name": "Mandy Mandarine",
							"female": true,
							"diverse": true
						},
						"yes": 8,
						"no": 2
					},
					{
						"candidate": {
							"name": "Melly Melone",
							"female": true,
							"diverse": false
						},
						"yes": 15,
						"no": 3
					}
				],
				"previous": [
					{
						"candidate": {
							"name": "Lina Limone",
							"female": true,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Manfred Mango",
							"female": false,
							"diverse": false
						}
					}
				],
				"results": [
					{
						"candidate": {
							"name": "Melly Melone",
							"female": true,
							"diverse": false
						}
					}
				]
			},
			{
				"name": "weitere Mitglieder",
				"count": 3,
				"countVariable": true,
				"overall": true,
				"joint": true,
				"candidates": [
					{
						"candidate": {
							"name": "Maria Maracuja",
							"female": true,
							"diverse": true
						},
						"yes": 12,
						"no": 0
					},
					{
						"candidate": {
							"name": "Bernard Banane",
							"female": false,
							"diverse": false
						},
						"yes": 12,
						"no": 1
					},
					{
						"candidate": {
							"name": "Kira Kirsch-Banane",
							"female": true,
							"diverse": false
						},
						"yes": 18,
						"no": 2
					},
					{
						"candidate": {
							"name": "Alfred Apfel",
							"female": false,
							"diverse": true
						},
						"yes": 11,
						"no": 3
					},
					{
						"candidate": {
							"name": "Anna Ananas",
							"female": true,
							"diverse": true
						},
						"yes": 12,
						"no": 4
					},
					{
						"candidate": {
							"name": "Cora Cocos",
							"female": true,
							"diverse": false
						},
						"yes": 7,
						"no": 1
					}
				],
				"previous": [
					{
						"candidate": {
							"name": "Lina Limone",
							"female": true,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Manfred Mango",
							"female": false,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Melly Melone",
							"female": true,
							"diverse": false
						}
					}
				],
				"results": [
					{
						"candidate": {
							"name": "Kira Kirsch-Banane",
							"female": true,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Alfred Apfel",
							"female": false,
							"diverse": true
						}
					},
					{
						"candidate": {
							"name": "Anna Ananas",
							"female": true,
							"diverse": true
						}
					}
				]
			}
		],
		"Schiedsgericht": [
			{
				"name": "Richter*innen",
				"count": 3,
				"joint": true,
				"candidates": [
					{
						"candidate": {
							"name": "Pablo Papaya",
							"female": false,
							"diverse": true
						},
						"yes": 8,
						"no": 0
					},
					{
						"candidate": {
							"name": "Lydia Litschi",
							"female": false,
							"diverse": false
						},
						"yes": 5,
						"no": 1
					},
					{
						"candidate": {
							"name": "Eduard Erdbeere",
							"female": true,
							"diverse": true
						},
						"yes": 7,
						"no": 0
					}
				],
				"results": [
					{
						"candidate": {
							"name": "Pablo Papaya",
							"female": false,
							"diverse": true
						}
					},
					{
						"candidate": {
							"name": "Lydia Litschi",
							"female": false,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Eduard Erdbeere",
							"female": true,
							"diverse": true
						}
					}
				]
			},
			{
				"name": "Ersatzrichter*innen",
				"count": 2,
				"joint": true,
				"overall": true,
				"candidates": [
					{
						"candidate": {
							"name": "Holly Holunder",
							"female": true,
							"diverse": false
						},
						"yes": 15,
						"no": 1
					},
					{
						"candidate": {
							"name": "Hila Himbeere",
							"female": true,
							"diverse": true
						},
						"yes": 9,
						"no": 0
					}
				],
				"previous": [
					{
						"candidate": {
							"name": "Paul Papaya",
							"female": false,
							"diverse": true
						}
					},
					{
						"candidate": {
							"name": "Lydia Litschi",
							"female": false,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Eduard Erdbeere",
							"female": true,
							"diverse": true
						}
					}
				],
				"results": [
					{
						"candidate": {
							"name": "Holly Holunder",
							"female": true,
							"diverse": false
						}
					},
					{
						"candidate": {
							"name": "Hila Himbeere",
							"female": true,
							"diverse": true
						}
					}
				]
			}
		]
	};
*/

	// TODO: load existing config instead of this?
	var currentElectionConfig = ( typeof currentElectionPreset !== 'undefined' ) ? $.extend( {}, electionConfig, currentElectionPreset ) : $.extend( {}, electionConfig );

	// TEMPLATE SELECTORS

    var identifierSuffix = '"]';
	var formIdentifierPrefix = '[data-fn="election-step-';

	// step
	var stepIdentifierPrefix = '[data-tg="election-step-';

	// back button
	var stepPrevIdentifierPrefix = '[data-fn="election-back-';

	// form
	var stepFormIdentifierPrefix = '[data-fn="election-step-form-';

	// select
	var stepSelectIdentifierPrefix = '[data-fn="election-step-select-';

	// item
	var itemTemplateIdentifierPrefix = '[data-tg="election-item-template-';
	var itemAppendIdentifierPrefix = '[data-tg="election-item-append-';
	var itemIdentifierAttr = 'data-g-tg';
	var itemIdentifierAttrVal = 'election-item';

	var itemIdAttr = 'data-item-id';

	// subitemgroup
	var subitemgroupTemplateIdentifierPrefix = '[data-tg="election-subitemgroup-template-';
	var subitemgroupAppendIdentifierPrefix = '[data-g-tg="election-subitemgroup-append-';
	var subitemgroupIdentifierAttr = 'data-g-tg';
	var subitemgroupIdentifierAttrVal = 'election-subitemgroup';

	var subitemIdAttr = 'data-subitem-id';

	// subitem
	var subitemTemplateIdentifierPrefix = '[data-tg="election-subitem-template-';
	var subitemAppendIdentifierPrefix = '[data-g-tg="election-subitem-append-';
	var subitemIdentifierAttr = 'data-g-tg';
	var subitemIdentifierAttrVal = 'election-subitem';

	var subitemIdAttr = 'data-subitem-id';

	// subitem input
	var confirmDeleteInputAttr = 'data-confirm-delete';
	var confirmDeleteInputClass = 'is-invalid';

	// user interaction
	var addSubitemsIdentifier = '[data-g-fn="add-subitems"]';
	var addSubitemsCountIdentifier = '[data-g-tg="add-subitems-count"]';
	var subitemRemoveIdentifier = '[data-g-fn="election-subitem-remove"]';
	var validateNumberInputIdentifier = '[data-g-fn="validate"]';

	var downloadFileFallback = 'dib_wahl-checker_';

	// INPUT NAMES

	var itemInputs = [];
	var subitemInputs = [];

	var inputIdentifierSeparator = '_';
	var formIdentifierAttr = 'name';

	// items
	itemInputs[ 0 ] = {
		"check": {
			"selector": "[id^=\"election-check-\"]",
			"value": "true",
			"name": "election_"
		}
	};

	// subitems
	subitemInputs[ 0 ] = {
		"count": {
			"selector": "[id^=\"election-count-\"]",
			"value": "",
			"name": "count_"
		},
		"joint": {
			"selector": "[id^=\"election-joint-\"]",
			"value": "true",
			"name": "joint_",
			"saveAs": "joint"
		}
	};
	subitemInputs[ 1 ] = {
		"name": {
			"selector": "[id^=\"name-\"]",
			"value": "",
			"name": "name_",
			"confirmSubitemDelete": true,
			"saveAs": "name"
		},
		"female": {
			"selector": "[id^=\"female-check-\"]",
			"value": "true",
			"name": "female_",
			"saveAs": "female"
		},
		"diverse": {
			"selector": "[id^=\"diverse-check-\"]",
			"value": "true",
			"name": "diverse_",
			"saveAs": "diverse"
		}
	};
	subitemInputs[ 2 ] = {
		"yes": {
			"selector": "[id^=\"votes-yes-\"]",
			"value": "",
			"name": "yes_",
			"saveAs": "yes"
		},
		"no": {
			"selector": "[id^=\"votes-no-\"]",
			"value": "",
			"name": "no_",
			"saveAs": "no"
		}
	};

	// ui content
	var electionTitleSeparator = ' » ';
	var addEmptyCandidatesCount = 3; // add x more empty items then candidates to elect
	var selectInitialOption = '<option value="-1" selected>Alle</option>';

	// FUNCTIONS

	// replace placeholders
	$.fn._replaceTemplatePlaceholders = function( replaceArr ) {
		// replaceArr = [ [ find, replace ], ... ]

		var $template = $( this );

		for ( var i = 0; i < replaceArr.length; i++ ) {
        	var replaceString = '{{ ' + replaceArr[ i ][ 0 ] + ' }}';
        	var regex = new RegExp( replaceString, 'g' );
			$template.html( $template.html().replace( regex, replaceArr[ i ][ 1 ] ) );
		}

		return $template;

	}

    // add sublist item (candidate list item)
    $.fn._addSublistItems = function( currentCount, currentItemIndex, currentI, currentJ, currentCandidates ) {

    	var newItemsCount = currentCount || 1;
    	var electionGroupIndex = currentItemIndex;
    	var electionIndex = currentI;
    	var singleElectionIndex = currentJ;
    	var candidates = ( typeof singleElectionIndex !== 'undefined' && currentCandidates ) ? currentCandidates[ singleElectionIndex ] : currentCandidates;
    	
    	var step = 1;
    	var $item = $( this );
    	var $subitemTemplate = Utils.$targetElems.filter( subitemTemplateIdentifierPrefix + step + identifierSuffix );
    	var $subitemAppend = $item.find( subitemAppendIdentifierPrefix + step + identifierSuffix );

    	// get start index from last item attr since any items may have been deleted
    	var $lastExistingSubitem = $item.find( '[' + subitemIdAttr + ']' ).last();
    	var startIndex = 0;
    	if ( $lastExistingSubitem.length > 0 ) {
    		startIndex = parseInt( $lastExistingSubitem.attr( subitemIdAttr ) ) + 1;
    	}
    	
    	for ( var i = 0; i < newItemsCount; i++ ) {
    		var currentIndex = startIndex + i;

    		// build subitem
    		var $subitemClone = $subitemTemplate.clone();

    		$subitemClone
    			._replaceTemplatePlaceholders( [ 
    				[ 'index', currentIndex ] 
    			] )
    			.removeAttr( 'style data-tg' )
    			.attr( subitemIdentifierAttr, subitemIdentifierAttrVal )
    			.attr( subitemIdAttr, currentIndex )
    			.show()
    			.find( subitemRemoveIdentifier )
				.on( 'click', function( event ) {
					event.preventDefault();
					var $subitem = $( this ).closest( '[' + subitemIdentifierAttr + '="' + subitemIdentifierAttrVal + '"]' );
					var $confirmDeleteInputs = $subitem.find( 'input[' + confirmDeleteInputAttr + ']' );
					if ( $confirmDeleteInputs.length > 0 ) {
						var deleteStop = false;
						$confirmDeleteInputs.each( function() {
							$input = $( this );
							if ( $input.val() != '' ) {
								deleteStop = true;
    							$input
    								.addClass( confirmDeleteInputClass )
    								.on( 'focus', function() {
    									$( this ).removeClass( confirmDeleteInputClass );
    								} )
    							;
							}
						} );
						if ( ! deleteStop ) {
							$subitem.remove();
						}
					}
					else {
						$subitem.remove();
					}
				} )
			;

    		// name subitem inputs
    		for ( var inputKey in subitemInputs[ step ] ) {
    			var $input = $subitemClone.find( subitemInputs[ step ][ inputKey ].selector );
    			// get item id for input naming
    			var itemId = $item.attr( itemIdAttr );
    			if ( $input.length > 0 ) {
    				$input
    					.attr( formIdentifierAttr, subitemInputs[ step ][ inputKey ].name + itemId + inputIdentifierSeparator + currentIndex )
    					.attr( 'value', subitemInputs[ step ][ inputKey ].value )
    				;
    				if ( subitemInputs[ step ][ inputKey ].confirmSubitemDelete ) {
    					$input.attr( confirmDeleteInputAttr, '' );
    				}
    			}
    		}

			// fill if pre configured
			if ( candidates && candidates[ i ] && candidates[ i ].candidate ) {
				if ( candidates[ i ].candidate.name && candidates[ i ].candidate.name != '' ) {
					$subitemClone.find( 'input[name^="name"]' ).val( candidates[ i ].candidate.name );
				}
				if ( candidates[ i ].candidate.female ) {
					$subitemClone.find( 'input[name^="female"]' ).attr( 'checked', '' );
				}
				if ( candidates[ i ].candidate.diverse ) {
					$subitemClone.find( 'input[name^="diverse"]' ).attr( 'checked', '' );
				}
			}

			// append subitem
			$subitemClone.appendTo( $subitemAppend );

    	}
    }

    // validate number input
	$.fn._validateNumberInput = function() {

		var $subitemClone = $( this );
		var $input = $subitemClone.find( validateNumberInputIdentifier );

		$input.addClass( 'TEST' );

		if ( $input.length > 0 ) {

			var $target = $subitemClone.find( $input.attr( 'data-g-tg' ) );

			$input.on( 'change keyup', function() {

				var $input = $( this );

				// limit election count value
				var min = parseInt( $input.attr( 'min' ) );
				var max = parseInt( $input.attr( 'max' ) );
				var value = $input.val();
				console.log( 'min: ' + min + ' – max: ' + max );
				if ( ( typeof min !== 'NaN' || typeof man !== 'NaN' ) && value != '' ) {
					if ( typeof min !== 'NaN' && value < min ) {
						$input.val( min );
					}
					else if ( typeof man !== 'NaN' && value > max ) {
						$input.val( max );
					}
				}

				if ( $target.length > 0 ) {
					// show / hide joint election checkbox
					if ( value > 1 ) {
						$target.show();
					}
					else {
						$target.hide();
					}
				}
			} );

		}

	}

	$.fn._getFormValues = function( currentIdentifierAttr ) {

		var $form = $( this );
		var values = {};
		var identifierAttr = currentIdentifierAttr || 'name';

		$form.find( 'input[' + identifierAttr + '], select[' + identifierAttr + '], textarea[' + identifierAttr + ']' ).each( function( i, elem ) {

			var $input = $( elem );

			if ( $input.attr( 'type' ) == 'radio' ) {
				// radio requires identifier 'name'
				if ( $input.is( ':checked' ) ) {
					values[ $input.attr( identifierAttr ) ] = $input.val();
				}
			}
			else if ( $input.attr( 'type' ) == 'checkbox' ) {
				values[ $input.attr( identifierAttr ) ] = ( $input.is( ':checked' ) ) ? $input.val() : null;
			}
			else {
				values[ $input.attr( identifierAttr ) ] = $input.val();
			}
		});

		return values;
	}

	_filterMatchingIndexes = function( indexes, startString ) {
		var matchingIndexes = [];
		for ( var i = 0; i < indexes.length; i++ ) {
			if ( indexes[ i ].indexOf( startString ) === 0 ) {
				matchingIndexes.push( indexes[ i ] );
			}
		}
		return matchingIndexes;
	}

	/*

	@Felix: 

	- in die folgende Funktion kann die Berechnung der Ergebnisse eingefügt werden
	- "explanation" habe ich erstmal weggelassen, da die Ergebnisse von der Oberlfäche ohnehin angezeigt werden, und ich gerne Daten und Oberflächenstruktur voneinander trennen würde


	(FALL 1: gemeinsame Wahl -> "joint" == true bzw. typeof "current" === 'string' )

	input = {
		"structure": [
			{
				"name": "Vorsitzende",
				"count": 2,
				"joint": true
			},
			{
				"name": "Schatzmeister*in",
				"count": 1
			},
			{
				"name": "weitere Mitglieder",
				"count": 2,
				"joint": true,
				"overall": true
			}
		],
		"current": "weitere Mitglieder",
		"previous": [
			{
				"candidate": {
					"name": "Lina Limone",
					"female": true,
					"diverse": false
				}
			},
			{
				"candidate": {
					"name": "Manfred Mango",
					"female": false,
					"diverse": false
				}
			},
			{
				"candidate": {
					"name": "Melly Melone",
					"female": true,
					"diverse": false
				}
			}
		],
		"candidates": [
			{
				"candidate": {
					"name": "Maria Maracuja",
					"female": true,
					"diverse": true
				},
				"yes": 10,
				"no": 0
			},
			{
				"candidate": {
					"name": "Bernard Banane",
					"female": false,
					"diverse": false
				},
				"yes": 12,
				"no": 1
			},
			{
				"candidate": {
					"name": "Kira Kirsch-Banane",
					"female": true,
					"diverse": false
				},
				"yes": 18,
				"no": 2
			},
			{
				"candidate": {
					"name": "Alfred Apfel",
					"female": false,
					"diverse": true
				},
				"yes": 15,
				"no": 3
			},
			{
				"candidate": {
					"name": "Anna Ananas",
					"female": true,
					"diverse": true
				},
				"yes": 12,
				"no": 4
			},
			{
				"candidate": {
					"name": "Cora Cocos",
					"female": true,
					"diverse": false
				},
				"yes": 7,
				"no": 1
			}
		]
	}

	(FALL 2: einzelne Wahl -> "joint" != true bzw. typeof "current" === 'object')

	input = {
		"structure": [
			{
				"name": "Vorsitzende",
				"count": 2,
				"joint": false
			},
			{
				"name": "Schatzmeister*in",
				"count": 1
			},
			{
				"name": "weitere Mitglieder",
				"count": 2,
				"joint": false,
				"overall": true
			}
		],
		"current": [
			"weitere Mitglieder",
			0
		],
		"previous": [
			{
				"candidate": {
					"name": "Lina Limone",
					"female": true,
					"diverse": false
				}
			},
			{
				"candidate": {
					"name": "Manfred Mango",
					"female": false,
					"diverse": false
				}
			},
			{
				"candidate": {
					"name": "Melly Melone",
					"female": true,
					"diverse": false
				}
			}
		],
		"candidates": [
			{
				"candidate": {
					"name": "Maria Maracuja",
					"female": true,
					"diverse": true
				},
				"yes": 10,
				"no": 0
			},
			{
				"candidate": {
					"name": "Bernard Banane",
					"female": false,
					"diverse": false
				},
				"yes": 12,
				"no": 1
			},
			{
				"candidate": {
					"name": "Kira Kirsch-Banane",
					"female": true,
					"diverse": false
				},
				"yes": 18,
				"no": 2
			},
			{
				"candidate": {
					"name": "Alfred Apfel",
					"female": false,
					"diverse": true
				},
				"yes": 15,
				"no": 3
			},
			{
				"candidate": {
					"name": "Anna Ananas",
					"female": true,
					"diverse": true
				},
				"yes": 12,
				"no": 4
			},
			{
				"candidate": {
					"name": "Cora Cocos",
					"female": true,
					"diverse": false
				},
				"yes": 7,
				"no": 1
			}
		]
	}

	output = [
		{
			"candidate": {
				"name": "Kira Kirsch-Banane",
				"female": true,
				"diverse": false
			}
		},
		{
			"candidate": {
				"name": "Alfred Apfel",
				"female": false,
				"diverse": true
			}
		},
		{
			"candidate": {
				"name": "Anna Ananas",
				"female": true,
				"diverse": true
			}
		}
	]

	*/
	_calculateElectionResult = function( input ) {
		
		var output;

		console.log( '_calculateElectionResult – input: ' + JSON.stringify( input, null, 2 ) );
		
		// do magic here...



		// TEST – TODO: delete
		output = ( typeof input.current === 'string' ) ?	 [
			{
				"candidate": {
					"name": "Kira Kirsch-Banane",
					"female": true,
					"diverse": false
				}
			},
			{
				"candidate": {
					"name": "Alfred Apfel",
					"female": false,
					"diverse": true
				}
			}
		] : [
			{
				"candidate": {
					"name": "Lina Limone",
					"female": true,
					"diverse": false
				}
			}
		];
		// /TEST



		return output;
	}

	_getElectionResult = function() {

		// election groups
		for ( var key in currentElectionConfig ) {

			// fill electionCalculationInput
			var electionCalculationInput = {
				"structure": [],
				"current": '',
				"previous": [],
				"candidates": []
			};
			var copyIfSet = [
				'name',
				'count',
				'joint',
				'overall'
			];
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {
				electionCalculationInput.structure.push( {} );

				for ( var k = 0; k < copyIfSet.length; k++ ) {
					if ( typeof currentElectionConfig[ key ][ i ][ copyIfSet[ k ] ] !== 'undefined' ) {
						electionCalculationInput.structure[ i ][ copyIfSet[ k ] ] = currentElectionConfig[ key ][ i ][ copyIfSet[ k ] ];
					}
				}
			}

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {

				_setPrevious = function() {
					if ( i === 0 ) {
						// reset previous at fist election within election group
						electionCalculationInput.previous = [];
					}
					else {
						// all following elections if results copy into previous
						var previousI = i - 1;
						if ( typeof currentElectionConfig[ key ][ previousI ].results !== 'undefined' && currentElectionConfig[ key ][ previousI ].results.length > 0 ) {
							for ( var k = 0; k < currentElectionConfig[ key ][ previousI ].results.length; k++ ) {
								electionCalculationInput.previous.push( currentElectionConfig[ key ][ previousI ].results[ k ] );
							}
						}
					}
				}

				// check if votes
				var voteFound = false;
				var missingVoteFound = false;
				if (
					typeof currentElectionConfig[ key ][ i ] !== 'undefined'
					&& typeof currentElectionConfig[ key ][ i ].candidates !== 'undefined'
					&& currentElectionConfig[ key ][ i ].candidates.length > 0
					&& typeof currentElectionConfig[ key ][ i ].candidates[ 0 ].candidate !== 'undefined'
				) {
					// election joint, one candidates list

					// check if all candidates have valid votes
					for ( var k = 0; k < currentElectionConfig[ key ][ i ].candidates.length; k++ ) {

						if (
							typeof currentElectionConfig[ key ][ i ].candidates[ k ].yes !== 'undefined'
							&& typeof currentElectionConfig[ key ][ i ].candidates[ k ].no !== 'undefined'
						) {
							voteFound = true;
						}
						else {
							missingVoteFound = true;
						}

					}

					// call _calculateElectionResult (one time)

					// if all votes valid call election tool
					if ( voteFound && ! missingVoteFound ) {

						// fill electionCalculationInput
						electionCalculationInput.current = currentElectionConfig[ key ][ i ].name;
						_setPrevious();
						electionCalculationInput.candidates = currentElectionConfig[ key ][ i ].candidates;

						// call election tool
						var electionCalculationOutput = _calculateElectionResult( electionCalculationInput );
						if ( electionCalculationOutput ) {
							// copy results into currentElectionConfig
							currentElectionConfig[ key ][ i ].results = electionCalculationOutput;
						}

					}

				}
				else if (
					typeof currentElectionConfig[ key ][ i ] !== 'undefined'
					&& typeof currentElectionConfig[ key ][ i ].candidates !== 'undefined'
					&& currentElectionConfig[ key ][ i ].candidates.length > 0
					&& typeof currentElectionConfig[ key ][ i ].candidates[ 0 ].candidate === 'undefined'
					&& currentElectionConfig[ key ][ i ].candidates[ 0 ].length > 0
					&& typeof currentElectionConfig[ key ][ i ].candidates[ 0 ][ 0 ].candidate !== 'undefined'
				) {
					// election single, multiple candidates lists

					// fill electionCalculationInput
					_setPrevious();

					for ( var j = 0; j < currentElectionConfig[ key ][ i ].candidates.length; j++ ) {

						// check if all candidates have valid votes
						for ( var k = 0; k < currentElectionConfig[ key ][ i ].candidates[ j ].length; k++ ) {

							if (
								typeof currentElectionConfig[ key ][ i ].candidates[ j ][ k ].yes !== 'undefined'
								&& typeof currentElectionConfig[ key ][ i ].candidates[ j ][ k ].no !== 'undefined'
							) {
								voteFound = true;
							}
							else {
								missingVoteFound = true;
							}

						}

						// call _calculateElectionResult each single election

						// if all votes valid call election tool
						if ( voteFound && ! missingVoteFound ) {

							// fill electionCalculationInput
							electionCalculationInput.current = [ currentElectionConfig[ key ][ i ].name, j ];
							// if still no results define results
							if ( j === 0 ) {
								currentElectionConfig[ key ][ i ].results = [];
							}
							electionCalculationInput.candidates = currentElectionConfig[ key ][ i ].candidates[ j ];

							// call election tool
							var electionCalculationOutput = _calculateElectionResult( electionCalculationInput );
							if ( electionCalculationOutput ) {
								// copy results into currentElectionConfig
								currentElectionConfig[ key ][ i ].results.push( electionCalculationOutput[ 0 ] );
								electionCalculationInput.previous.push( electionCalculationOutput[ 0 ] );
							}

						}

					}
				}

			}

		}

		// TEST: set test result
		//currentElectionConfig = $.extend( {}, currentElectionConfig, testElectionResult );

		// if election result return true
		return ( electionCalculationOutput ) ? true : false;
	}

	// get config step 0
	$.fn._getElectionCurrentConfig_0 = function() {

		// TODO: what if changing count while preconfigured single elections lists

		var step = 0;

		currentElectionConfig = ( typeof currentElectionPreset !== 'undefined' ) ? $.extend( {}, electionConfig, currentElectionPreset ) : $.extend( {}, electionConfig );

		var $form = $( this );

		var values = $form._getFormValues( formIdentifierAttr );
        var deleteKeys = [];

		for ( var key in currentElectionConfig ) {
			// get selected election types

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
        	var value = values[ itemInputs[ step ].check.name + itemIndex ];

        	if ( value === null ) {
        		// remember non selected items, delete later
        		deleteKeys.push( key );
        	}
        	else {
        		// get values of selected items

	        	for ( var subitemIndex = 0; subitemIndex < currentElectionConfig[ key ].length; subitemIndex++ ) {

	        		var count = values[ subitemInputs[ step ].count.name + itemIndex + inputIdentifierSeparator + subitemIndex ];
	        		if ( !! count ) {
	        			count = parseInt( count );
	        		}
	        		var joint = values[ subitemInputs[ step ].joint.name + itemIndex + inputIdentifierSeparator + subitemIndex ];
	        		if ( !! joint ) {
	        			joint = JSON.parse( joint );
	        		}

		        	if ( count != null ) {
		        		currentElectionConfig[ key ][ subitemIndex ].count = count;
		        	}
		        	else {
		        		count = currentElectionConfig[ key ][ subitemIndex ].count;
		        	}

		        	if ( joint != null ) {
		        		currentElectionConfig[ key ][ subitemIndex ].joint = true;
		        	}
		        	else if ( count > 1 ) {
		        		currentElectionConfig[ key ][ subitemIndex ].joint = false;
		        	}

	        		// reset existing candidates if change of 'joint'
	        		if ( count > 1 && ! joint ) {
	        			// make candidates groups – try delete election candidates (one group)
		        		if ( 
		        				typeof currentElectionConfig[ key ][ subitemIndex ].candidates !== 'undefined'
		        				&& typeof currentElectionConfig[ key ][ subitemIndex ].candidates[ 0 ] !== 'undefined'
		        				&& typeof currentElectionConfig[ key ][ subitemIndex ].candidates[ 0 ].candidate !== 'undefined'
		        			) {
		        			// delete multiple candidates lists
		        			delete currentElectionConfig[ key ][ subitemIndex ][ 'candidates' ];
		        		}
	        		}
	        		else {
	        			// make one group – try delete single election candidates groups
		        		if ( 
		        				typeof currentElectionConfig[ key ][ subitemIndex ].candidates !== 'undefined'
		        				&& typeof currentElectionConfig[ key ][ subitemIndex ].candidates[ 0 ] !== 'undefined'
		        				&& typeof currentElectionConfig[ key ][ subitemIndex ].candidates[ 0 ][ 0 ] !== 'undefined'
		        				&& typeof currentElectionConfig[ key ][ subitemIndex ].candidates[ 0 ][ 0 ].candidate !== 'undefined'
		        			) {
		        			// delete multiple candidates lists
		        			delete currentElectionConfig[ key ][ subitemIndex ][ 'candidates' ];
		        		}
	        		}

	        	}

        	}

		}

    	// delete non selected items
    	for ( var i = 0; i < deleteKeys.length; i++ ) {
    		delete currentElectionConfig[ deleteKeys[ i ] ];
    	}

		console.log( 'config step 0 (currentElectionConfig): ' + JSON.stringify( currentElectionConfig, null, 2 ) );

	}

	// get config step 1
	$.fn._getElectionCurrentConfig_1 = function() {

		// TODO: check if configuration change of election joint (reset candidates or merge existing candidates?)
		// joint: true || undefined

		var step = 1;

		var $form = $( this );

		_isValidCandidate = function( nameKey ) {
			return ( typeof values[ nameKey ] !== 'undefined' && values[ nameKey ] !== null && values[ nameKey ] !== '' );
		}
        
		_getCandidate = function( nameKey ) {
			var name = values[ nameKey ];
			var female = values[ nameKey.replace( nameStart_name, nameStart_female ) ] || false;
			var diverse = values[ nameKey.replace( nameStart_name, nameStart_diverse ) ] || false; 
			
			return {
				[ subitemInputs[ step ][ 'name' ].saveAs ]: name,
				[ subitemInputs[ step ][ 'female' ].saveAs ]: female,
				[ subitemInputs[ step ][ 'diverse' ].saveAs ]: diverse
			};

		}

		var values = $form._getFormValues( formIdentifierAttr );

        // election groups
        for ( var key in currentElectionConfig ) {

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
	        var electionGroup = key;

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {

				// push candidates
				if ( typeof currentElectionConfig[ key ][ i ][ 'candidates' ] === 'undefined' ) {
					currentElectionConfig[ key ][ i ][ 'candidates' ] = [];
				}

	        	var election = currentElectionConfig[ key ][ i ].name;

	        	var electionCount = parseInt( currentElectionConfig[ key ][ i ].count );
	        	var electionJoint = currentElectionConfig[ key ][ i ].joint;
				var valuesKeys = Object.keys( values );

				var nameStart_name = subitemInputs[ step ][ 'name' ].name;
				var nameStart_female = subitemInputs[ step ][ 'female' ].name;
				var nameStart_diverse = subitemInputs[ step ][ 'diverse' ].name;
				var nameIndexes;
				var matchingKeys;

		        if ( electionCount === 1 || electionJoint === true ) {
	        		// make (one) candidates list
	        		var $item = $form.find( '[' + itemIdAttr + '="' + itemIndex + inputIdentifierSeparator + i + '"]' );
	        		var $subitems = $item.find( '[' + subitemIdAttr + ']' );

	        		// get all candidates from list
					nameIndexes = itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator;
					matchingKeys = _filterMatchingIndexes( valuesKeys, nameStart_name + nameIndexes );

					var reduceIndex = 0;
					for ( var k = 0; k < matchingKeys.length; k++ ) {

						if ( _isValidCandidate( matchingKeys[ k ] ) ) {

	        				var candidate = _getCandidate( matchingKeys[ k ] );

	        				// check if already exiting or push
	        				if ( typeof currentElectionConfig[ key ][ i ].candidates === 'undefined' ) {
	        					currentElectionConfig[ key ][ i ].candidates = [];
	        				}

	        				if ( typeof currentElectionConfig[ key ][ i ].candidates[ k - reduceIndex ] === 'undefined' ) {
	        					currentElectionConfig[ key ][ i ].candidates[ k - reduceIndex ] = {};
	        				}
	        				currentElectionConfig[ key ][ i ].candidates[ k - reduceIndex ].candidate = candidate;
						}
						else {
							reduceIndex++;
						}
					}

		        }
	        	else {
	        		// make list of candidates list
	        		for ( var j = 0; j < electionCount; j++ ) {

						nameIndexes = itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator + j + inputIdentifierSeparator;
						matchingKeys = _filterMatchingIndexes( valuesKeys, nameStart_name + nameIndexes );

						var reduceIndex = 0;
						for ( var k = 0; k < matchingKeys.length; k++ ) {

							if ( _isValidCandidate( matchingKeys[ k ] ) ) {
								
		        				var candidate = _getCandidate( matchingKeys[ k ] );

		        				// check if already exiting or push
		        				if ( typeof currentElectionConfig[ key ][ i ].candidates === 'undefined' ) {
		        					currentElectionConfig[ key ][ i ].candidates = [];
		        				}
		        				if ( typeof currentElectionConfig[ key ][ i ].candidates[ j ] === 'undefined' ) {
		        					currentElectionConfig[ key ][ i ].candidates[ j ] = [];
		        				}

		        				if ( typeof currentElectionConfig[ key ][ i ].candidates[ j ][ k - reduceIndex ] === 'undefined' ) {
		        					currentElectionConfig[ key ][ i ].candidates[ j ][ k - reduceIndex ] = {};
		        				}
		        				currentElectionConfig[ key ][ i ].candidates[ j ][ k - reduceIndex ].candidate = candidate;
							}
							else {
								reduceIndex++;
							}

						}
	        		}
	        	}

	        }

        }

		console.log( 'config step 1 (currentElectionConfig): ' + JSON.stringify( currentElectionConfig, null, 2 ) );

	}

	// get config step 2
	$.fn._getElectionCurrentConfig_2 = function() {

		var step = 2;

		var $form = $( this );

		var values = $form._getFormValues( formIdentifierAttr );

        // election groups
        for ( var key in currentElectionConfig ) {

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
	        var electionGroup = key;

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {

	        	var election = currentElectionConfig[ key ][ i ].name;

	        	var electionCount = parseInt( currentElectionConfig[ key ][ i ].count );
	        	var electionJoint = currentElectionConfig[ key ][ i ].joint;
				var valuesKeys = Object.keys( values );

				var nameStart_yes = subitemInputs[ step ].yes.name;
				var nameStart_no = subitemInputs[ step ].no.name;
				var nameIndexes;
				var matchingKeys;

		        if ( electionCount === 1 || electionJoint === true ) {
	        		// make (one) candidates list
	        		var $item = $form.find( '[' + itemIdAttr + '="' + itemIndex + inputIdentifierSeparator + i + '"]' );
	        		var $subitems = $item.find( '[' + subitemIdAttr + ']' );

	        		// get all candidates from list
					nameIndexes = itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator;
					matchingKeys = _filterMatchingIndexes( valuesKeys, nameStart_yes + nameIndexes );

					for ( var k = 0; k < matchingKeys.length; k++ ) {

						var yes = values[ matchingKeys[ k ] ] || 0;
						var no = values[ matchingKeys[ k ].replace( nameStart_yes, nameStart_no ) ] || 0;

        				currentElectionConfig[ key ][ i ].candidates[ k ].yes = yes;
        				currentElectionConfig[ key ][ i ].candidates[ k ].no = no;
					}

		        }
	        	else {
	        		// make list of candidates list
	        		for ( var j = 0; j < electionCount; j++ ) {
	        			
						nameIndexes = itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator + j + inputIdentifierSeparator;
						matchingKeys = _filterMatchingIndexes( valuesKeys, nameStart_yes + nameIndexes );

						for ( var k = 0; k < matchingKeys.length; k++ ) {

							var yes = values[ matchingKeys[ k ] ] || 0;
							var no = values[ matchingKeys[ k ].replace( nameStart_yes, nameStart_no ) ] || 0;

	        				currentElectionConfig[ key ][ i ].candidates[ j ][ k ].yes = yes;
	        				currentElectionConfig[ key ][ i ].candidates[ j ][ k ].no = no;
						}
	        		}
	        	}

	        }

        }

		console.log( 'config step 2 (currentElectionConfig): ' + JSON.stringify( currentElectionConfig, null, 2) );

	}

	// step 3 – results
    _buildStep_3 = function() {

    	var step = 3;

        // item
        var $itemTemplate = Utils.$targetElems.filter( itemTemplateIdentifierPrefix + step + identifierSuffix );
        var $itemAppend = Utils.$targetElems.filter( itemAppendIdentifierPrefix + step + identifierSuffix );

        // subitemgroup
        var $subitemgroupTemplate = Utils.$targetElems.filter( subitemgroupTemplateIdentifierPrefix + step + identifierSuffix );

        // subitem
        var $subitemTemplate = Utils.$targetElems.filter( subitemTemplateIdentifierPrefix + step + identifierSuffix );

        // empty before fill
        $itemAppend.empty();
        
        // election groups
        for ( var key in currentElectionConfig ) {

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
	        var electionGroup = key;

        	// clone
			var $itemClone = $itemTemplate.clone();

			$itemClone
				.removeAttr( 'data-tg style' )
    			._replaceTemplatePlaceholders( [ 
					[ 'title', electionGroup ], 
					[ 'index', itemIndex ] 
				] )
			;

			var $subitemgroupAppend = $itemClone.find( subitemgroupAppendIdentifierPrefix + step + identifierSuffix );

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {
	        	var election = currentElectionConfig[ key ][ i ].name;

	    		// build subitemgroup
	    		var $subitemgroupClone = $subitemgroupTemplate.clone();

	    		$subitemgroupClone
	    			._replaceTemplatePlaceholders( [ 
	    				[ 'index', i ],
	    				[ 'title', election ]
	    			] )
	    			.removeAttr( 'style data-tg' )
	    			.show()
				;

	        	// check if results
	        	if ( typeof currentElectionConfig[ key ][ i ].results !== 'undefined' && currentElectionConfig[ key ][ i ].results.length > 0 ) {
	        		
					var $subitemAppend = $subitemgroupClone.find( subitemAppendIdentifierPrefix + step + identifierSuffix );

	        		for ( var k = 0; k < currentElectionConfig[ key ][ i ].results.length; k++ ) {

		        		// clone subitems
						var $subitemClone = $subitemTemplate.clone();

			    		var candidateName = currentElectionConfig[ key ][ i ].results[ k ].candidate.name || '';

			    		$subitemClone
			    			._replaceTemplatePlaceholders( [ 
			    				[ 'candidateName', candidateName ]
			    			] )
			    			.removeAttr( 'style data-tg' )
			    			.show()
						;

						// append subitem
						$subitemClone.appendTo( $subitemAppend );

	        		}

	        	}

				// append subitem
				$subitemgroupClone.appendTo( $subitemgroupAppend );

			}

			// append
        	$itemClone.appendTo( $itemAppend );

        }

    };

	// step 2 – results
    _buildStep_2 = function() {

    	var step = 2;

    	// form
        var $form = Utils.$functionElems.filter( stepFormIdentifierPrefix + step + identifierSuffix );

        // item
        var $itemTemplate = Utils.$targetElems.filter( itemTemplateIdentifierPrefix + step + identifierSuffix );
        var $itemAppend = Utils.$targetElems.filter( itemAppendIdentifierPrefix + step + identifierSuffix );

        // item subitem
        var $subitemTemplate = Utils.$targetElems.filter( subitemTemplateIdentifierPrefix + step + identifierSuffix );

        // empty before fill
        $itemAppend.empty();

        // reset select
        _Navigation.$select[ step ]
        	.empty()
        	.append( selectInitialOption )
        ;
        
        // election groups
        for ( var key in currentElectionConfig ) {

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
	        var electionGroup = key;

	        // fill select
	        _Navigation.$select[ step ].append( '<option value="' + itemIndex + '">' + electionGroup + '</option>' );

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {
	        	var election = currentElectionConfig[ key ][ i ].name;

	        	var electionCount = parseInt( currentElectionConfig[ key ][ i ].count );
	        	var electionJoint = currentElectionConfig[ key ][ i ].joint;
				var electionCandidates = currentElectionConfig[ key ][ i ].candidates;
    	
	        	var title;

	        	_cloneStep_2 = function( currentJ ) {

	        		var $itemClone = $itemTemplate.clone();
	        		var j = currentJ;

			        // fill select
			        _Navigation.$select[ step ].append( '<option value="' + itemIndex + inputIdentifierSeparator + i + ( ( typeof j !== 'undefined' ) ? inputIdentifierSeparator + j : '' ) + '">' + title + '</option>' );

					$itemClone
						.removeAttr( 'data-tg style' )
		    			.attr( itemIdentifierAttr, itemIdentifierAttrVal )
		    			.attr( itemIdAttr, ( typeof j !== 'undefined' ) ? itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator + j : itemIndex + inputIdentifierSeparator + i )
						._replaceTemplatePlaceholders( [ 
							[ 'title', title ], 
							[ 'index', itemIndex ] 
						] )
					;

					// TODO: simplify? (electionCandidates may be undefined)
    				var subitemsCount;
    				if ( typeof j !== 'undefined' && typeof electionCandidates !== 'undefined' && typeof electionCandidates[ j ] !== 'undefined' && electionCandidates[ j ].length > 0 ) {
    					subitemsCount = electionCandidates[ j ].length;
    				}
    				else if ( typeof j === 'undefined' && typeof electionCandidates !== 'undefined' && typeof electionCandidates[ 0 ] !== 'undefined' && typeof electionCandidates[ 0 ].candidate !== 'undefined' && electionCandidates.length > 0 ) {
    					subitemsCount = electionCandidates.length;
    				}
    				else {
    					subitemsCount = 0;
    				}

			    	var candidates = ( typeof j !== 'undefined' && electionCandidates ) ? electionCandidates[ j ] : electionCandidates;

			    	var $subitemAppend = $itemClone.find( subitemAppendIdentifierPrefix + step + identifierSuffix );
			    	
			    	for ( var l = 0; l < subitemsCount; l++ ) {

			    		// build subitem
			    		var $subitemClone = $subitemTemplate.clone();

			    		var candidateName = candidates[ l ].candidate.name || '';

			    		$subitemClone
			    			._replaceTemplatePlaceholders( [ 
			    				[ 'index', subitemsCount ],
			    				[ 'candidateName', candidateName ]
			    			] )
			    			.removeAttr( 'style data-tg' )
			    			.attr( subitemIdentifierAttr, subitemIdentifierAttrVal )
			    			.attr( subitemIdAttr, subitemsCount )
			    			.show()
							._validateNumberInput()
						;
			    		// name subitem inputs
			    		for ( var inputKey in subitemInputs[ step ] ) {
			    			var $input = $subitemClone.find( subitemInputs[ step ][ inputKey ].selector );
			    			// get item id for input naming
			    			var itemId = $itemClone.attr( itemIdAttr );
			    			if ( $input.length > 0 ) {
			    				$input
			    					.attr( formIdentifierAttr, subitemInputs[ step ][ inputKey ].name + itemId + inputIdentifierSeparator + l )
			    					.attr( 'value', subitemInputs[ step ][ inputKey ].value )
			    				;
			    			}
			    		}
						// fill if pre configured
						if ( candidates && candidates[ l ] && candidates[ l ].candidate ) {
							if ( typeof candidates[ l ].yes !== 'undefined' && candidates[ l ].yes >= 0 ) {
								$subitemClone.find( 'input[name^="yes"]' ).val( candidates[ l ].yes );
							}
							if ( typeof candidates[ l ].no !== 'undefined' && candidates[ l ].no >= 0 ) {
								$subitemClone.find( 'input[name^="no"]' ).val( candidates[ l ].no );
							}
						}

						// append subitem
						$subitemClone.appendTo( $subitemAppend );

			    	}

					// append
		        	$itemClone.appendTo( $itemAppend );
		        }

		        if ( electionCount == 1 ) {
	        		title = electionGroup + electionTitleSeparator + election;
	        		_cloneStep_2();
		        }
		        else {
		        	if ( electionJoint ) {
		        		title = electionGroup + electionTitleSeparator + election + ' (gemeinsam ' + electionCount + ')';
		        		_cloneStep_2();
		        	}
		        	else {
		        		for ( var j = 0; j < electionCount; j++ ) {
		        			title = electionGroup + electionTitleSeparator + election + electionTitleSeparator + ( j + 1 ) + '&thinsp;/&thinsp;' + electionCount;
		        			_cloneStep_2( j );
		        		}
		        	}
		        }

			}

        }

        // get config on submit
        $form.on( 'submit', function( event ) {

        	event.preventDefault();

        	var $form = $( this );
        	$form._getElectionCurrentConfig_2();

        	// get election result
        	if ( _getElectionResult() ) {

				//console.log( 'RESULT (currentElectionConfig): ' + JSON.stringify( currentElectionConfig, null, 2) );
        		
        		_buildStep_3();
        	}

        } );

    };

	// step 1 – prepare
    _buildStep_1 = function() {

    	var step = 1;

    	// form
        var $form = Utils.$functionElems.filter( stepFormIdentifierPrefix + step + identifierSuffix );

        // item
        var $itemTemplate = Utils.$targetElems.filter( itemTemplateIdentifierPrefix + step + identifierSuffix );
        var $itemAppend = Utils.$targetElems.filter( itemAppendIdentifierPrefix + step + identifierSuffix );

        // item subitem
        var $subitemTemplate = Utils.$targetElems.filter( subitemTemplateIdentifierPrefix + step + identifierSuffix );

        // empty before fill
        $itemAppend.empty();

        // reset select
        _Navigation.$select[ step ]
        	.empty()
        	.append( selectInitialOption )
        ;
        
        // election groups
        for ( var key in currentElectionConfig ) {

        	var itemIndex = Object.keys( currentElectionConfig ).indexOf( key );
	        var electionGroup = key;

	        // fill select
	        _Navigation.$select[ step ].append( '<option value="' + itemIndex + '">' + electionGroup + '</option>' );

        	// elections within group
			for ( var i = 0; i < currentElectionConfig[ key ].length; i++ ) {
	        	var election = currentElectionConfig[ key ][ i ].name;

	        	var electionCount = parseInt( currentElectionConfig[ key ][ i ].count );
	        	var electionJoint = currentElectionConfig[ key ][ i ].joint;
				var electionCandidates = currentElectionConfig[ key ][ i ].candidates;
    	
	        	var title;

	        	_cloneStep_1 = function( currentJ ) {

	        		var $itemClone = $itemTemplate.clone();
	        		var j = currentJ;

			        // fill select
			        _Navigation.$select[ step ].append( '<option value="' + itemIndex + inputIdentifierSeparator + i + ( ( typeof j !== 'undefined' ) ? inputIdentifierSeparator + j : '' ) + '">' + title + '</option>' );

					$itemClone
						.removeAttr( 'data-tg style' )
		    			.attr( itemIdentifierAttr, itemIdentifierAttrVal )
		    			.attr( itemIdAttr, ( typeof j !== 'undefined' ) ? itemIndex + inputIdentifierSeparator + i + inputIdentifierSeparator + j : itemIndex + inputIdentifierSeparator + i )
						._replaceTemplatePlaceholders( [ 
							[ 'title', title ], 
							[ 'index', itemIndex ] 
						] )
					;

					// add subitems
    				var subitemsCount;
    				if ( typeof j !== 'undefined' && typeof electionCandidates !== 'undefined' && typeof electionCandidates[ j ] !== 'undefined' && electionCandidates[ j ].length > 0 ) {
    					subitemsCount = electionCandidates[ j ].length;
    				}
    				else if (
    					typeof j === 'undefined' && typeof electionCandidates !== 'undefined' 
    					&& typeof electionCandidates[ 0 ] !== 'undefined' 
    					&& typeof electionCandidates[ 0 ].candidate !== 'undefined' 
    					&& electionCandidates.length > 0
    				) {
    					subitemsCount = electionCandidates.length;
    				}
    				else {
    					subitemsCount = ( electionCount == 1 || ! electionJoint ) ? 1 + addEmptyCandidatesCount : electionCount + addEmptyCandidatesCount;
					}
					
					$itemClone._addSublistItems( subitemsCount, itemIndex, i, j, electionCandidates );
					
					// bind add subitems button
				    $itemClone
				    	.find( addSubitemsIdentifier )
				    	.on( 'click', function( event ) {
				    		event.preventDefault();
				    		var $addSubitemsButton = $( this );
				    		var $item = $addSubitemsButton.closest( '[' + itemIdentifierAttr + '="' + itemIdentifierAttrVal + '"]' );
				    		var $addSubitemsCountInput = $item.find( addSubitemsCountIdentifier );
				    		var newItemsCount = $addSubitemsCountInput.val();
				    		$item._addSublistItems( newItemsCount, itemIndex, i, j );
				    	} )
				    ;

					// append
		        	$itemClone.appendTo( $itemAppend );
		        }

		        if ( electionCount == 1 ) {
	        		title = electionGroup + electionTitleSeparator + election;
	        		_cloneStep_1();
		        }
		        else {
		        	if ( electionJoint ) {
		        		title = electionGroup + electionTitleSeparator + election + ' (gemeinsam ' + electionCount + ')';
		        		_cloneStep_1();
		        	}
		        	else {
		        		for ( var j = 0; j < electionCount; j++ ) {
		        			title = electionGroup + electionTitleSeparator + election + electionTitleSeparator + ( j + 1 ) + '&thinsp;/&thinsp;' + electionCount;
		        			_cloneStep_1( j );
		        		}
		        	}
		        }

			}

        }

        // get config on submit
        $form.on( 'submit', function( event ) {

        	event.preventDefault();

        	var $form = $( this );
        	$form._getElectionCurrentConfig_1();

        	_buildStep_2();

        } );

    };

	// step 0 – config
    _buildStep_0 = function() {

    	// TOFIX?: what about currentElectionPreset vs. currentElectionConfig?

    	var step = 0;

    	// form
        var $form = Utils.$functionElems.filter( stepFormIdentifierPrefix + step + identifierSuffix );

        // item
        var $itemTemplate = Utils.$targetElems.filter( itemTemplateIdentifierPrefix + step + identifierSuffix );
        var $itemAppend = Utils.$targetElems.filter( itemAppendIdentifierPrefix + step + identifierSuffix );

        // item subitem
        var $subitemTemplate = Utils.$targetElems.filter( subitemTemplateIdentifierPrefix + step + identifierSuffix );

        // empty before fill
        $itemAppend.empty();
        
        // build ui for each election type
        for ( var key in electionConfig ) {

        	var itemIndex = Object.keys( electionConfig ).indexOf( key );
        	var $itemClone = $itemTemplate.clone();
			$itemClone
				.removeAttr( 'data-tg style' )
    			.attr( itemIdentifierAttr, itemIdentifierAttrVal )
    			.attr( itemIdAttr, itemIndex )
				._replaceTemplatePlaceholders( [ 
					[ 'title', key ], 
					[ 'index', itemIndex ] 
				] )
			;

    		// name item inputs
    		for ( var inputKey in itemInputs[ step ] ) {
    			var $input = $itemClone.find( itemInputs[ step ][ inputKey ].selector );
    			if ( $input.length > 0 ) {
    				$input
    					.attr( formIdentifierAttr, itemInputs[ step ][ inputKey ].name + itemIndex )
    					.attr( 'value', itemInputs[ step ][ inputKey ].value )
    				;
		    		// fill if pre configured (use currentElectionPreset here since currentElectionConfig will always contain these values at this time)
		    		if ( 
		    			typeof currentElectionPreset !== 'undefined' 
		    			&& currentElectionPreset[ key ] 
		    		) {
		    			$input.attr( 'checked', '' );
		    		}
    			}
    		}

			// add subitems
			var $electionTypesListSubitemAppend = $itemClone.find( subitemAppendIdentifierPrefix + step + identifierSuffix );

			for ( var i = 0; i < electionConfig[ key ].length; i++ ) {

        		var subitemIndex = i;
        		var $subitemClone = $subitemTemplate.clone();

        		// remove count input or hide checkbox
        		if ( electionConfig[ key ][ i ].countVariable ) {
        			if ( 
        				typeof currentElectionConfig[ key ] !== 'undefined'
        				&& typeof currentElectionConfig[ key ][ i ] !== 'undefined'
        				&& ! currentElectionConfig[ key ][ i ].count > 1 
        			) {
	        			// hide checkbox
	        			$subitemClone.find( '[data-tp-o="3"]' ).hide();
        			}
        		}
        		else if ( ! ( Number.isInteger( electionConfig[ key ][ i ].count ) && electionConfig[ key ][ i ].count > 1 ) ) {
        			// remove input
        			$subitemClone.find( '[data-tp-o="3"]' ).remove();
        		} 

        		// remove count if not required
        		if ( electionConfig[ key ][ i ].countVariable ) {
        			$subitemClone.find( '[data-tp-o="1"]' ).remove();
        		}
        		else {
        			$subitemClone.find( '[data-tp-o="2"]' ).remove();
        		}

        		$subitemClone
        			.removeAttr( 'data-tg style' )
        			._replaceTemplatePlaceholders( [ 
        				[ 'electionItemType', electionConfig[ key ][ i ].name ], 
        				[ 'electionItemCount', electionConfig[ key ][ i ].count ], 
        				[ 'itemIndex', itemIndex ], 
        				[ 'index', subitemIndex ] 
        			] )
					._validateNumberInput()
        		;

        		// name subitem inputs
        		for ( var inputKey in subitemInputs[ step ] ) {
        			var $input = $subitemClone.find( subitemInputs[ step ][ inputKey ].selector );
        			if ( $input.length > 0 ) {
        				// add current value if set (checkbox: checkend, number: value)
        				$input
        					.attr( formIdentifierAttr, subitemInputs[ step ][ inputKey ].name + itemIndex + inputIdentifierSeparator + subitemIndex )
	    					.attr( 'value', subitemInputs[ step ][ inputKey ].value )
	    				;
			    		// fill if pre configured
			    		if ( 
			    			$input.is( '[' + formIdentifierAttr + '^="count"]' ) 
			    			&& currentElectionConfig[ key ] 
			    			&& currentElectionConfig[ key ][ i ] 
			    			&& currentElectionConfig[ key ][ i ].countVariable === true 
			    			&& currentElectionConfig[ key ][ i ].count > 0 
			    		) {
			    			$input.attr( 'value', currentElectionConfig[ key ][ i ].count );
			    		}
			    		if ( 
			    			$input.is( '[type="checkbox"]' ) 
			    			&& currentElectionConfig[ key ] 
			    			&& currentElectionConfig[ key ][ i ] 
			    			&& currentElectionConfig[ key ][ i ].joint === JSON.parse( subitemInputs[ step ].joint.value ) 
			    		) {
			    			$input.attr( 'checked', '' );
			    		}
        			}
        		}

        		// append subitem
				$subitemClone.appendTo( $electionTypesListSubitemAppend );
			}

			// append item
        	$itemClone
        		.appendTo( $itemAppend )
        		.checkSlideToggle( {
			        triggerSelector: '[data-g-fn="accordion-trigger"]'
			    } )
			;

        }

        // get config on submit
        $form.on( 'submit', function( event ) {

        	event.preventDefault();

        	var $form = $( this );
        	$form._getElectionCurrentConfig_0();

        	_buildStep_1();

        } );

    };

	// download file
	function _download( content, name, type ) {
		var a = document.createElement( 'a' );
		var file = new Blob( [content], { type: type } );
		a.href = URL.createObjectURL( file );
		a.download = name;
		a.click();
	}

	// save current election config as json file
	_saveCurrentElectionConfig = function() {
		// save config if exists

		// get current config of current step
		console.log( 'save step: ' + _Navigation.currentStep );

		var currentStep = ( _Navigation.currentStep < _Navigation.steps - 1 ) ? _Navigation.currentStep : _Navigation.steps - 2;
		Utils.$functionElems.filter( stepFormIdentifierPrefix + currentStep + identifierSuffix )[ ( '_getElectionCurrentConfig_' + currentStep ) ]();

		if ( typeof currentElectionConfig !== 'undefined' ) {
			var $saveModal = Utils.$targetElems.filter( '[data-tg="save-modal"]' );
			var $form = $saveModal.find( 'form' );
			var $fileNameInput = $form.find( 'input[name="file_name"]' );

			var d = new Date,
			dateString = [ 
				d.getFullYear(), 
				( '00' + ( d.getMonth() + 1 ) ).slice( -2 ),
				( '00' + d.getDate() ).slice( -2 )
			].join( '-' ) + '_' + [ 
				( '00' + d.getHours() ).slice( -2 ),
				( '00' + d.getMinutes() ).slice( -2 ),
				( '00' + d.getSeconds() ).slice( -2 )
			].join( '-' );
			$fileNameInput
				.val( downloadFileFallback + dateString )
				.on( 'focus', function() {
					$( this ).select();
				} )
			;

			$saveModal.on( 'shown.bs.modal', ( function( fileNameInput ) {
				setTimeout( function() {
					$( fileNameInput ).focus();
				}, 500 );
			} )( $fileNameInput ) );

			$saveModal.modal( 'show' );

			$form.one( 'submit', function( event, $saveModal ) {
				console.log( 'submit' );
				event.preventDefault();
				var $form = $( this );
				var fileName = $fileNameInput.val();
				if ( fileName ) {
					_download( JSON.stringify( currentElectionConfig ), fileName + '.json', 'application/json' );
					Utils.$targetElems.filter( '[data-tg="save-modal"]' ).modal( 'hide' );
				}
			} );
		}
		else {
			// TODO: fallback message
		}
	}
	// init
	Utils.$functionElems.filter( '[data-fn="config-download"]' ).on( 'click', function() {
		Utils.$functionElems.filter( '#toggle-navbar-collapse' ).trigger( 'click' );
		_saveCurrentElectionConfig();
	} );

	// load election config from json file
	_loadCurrentElectionConfig = function() {
		// save config if exists
		var $loadModal = Utils.$targetElems.filter( '[data-tg="load-modal"]' );
		var $form = $loadModal.find( 'form' );

		var $fileInput = $form.find( 'input[name="file_name"]' );
		var result;

		$loadModal.modal( 'show' );

		$fileInput.on( 'change', function( event ) {

			var files = event.target.files;

			if ( !! files && files.length > 0 ) {
				var reader = new FileReader();

				reader.onload = ( function( file ) {
		            return function( event ) {
						try {
							result = JSON.parse( event.target.result );
						} 
						catch( error ) {
							console.log( 'error trying to parse json: ' + error );
						}
					}
				} )( files[ 0 ] );
				reader.readAsText( files[ 0 ] );
			}
		} );

		$form.one( 'submit', function( event ) {
			event.preventDefault();

			if ( typeof result !== 'undefined' ) {
				// set both
				currentElectionPreset = $.extend( {}, result );
				currentElectionConfig = $.extend( {}, result );

				Utils.$targetElems.filter( '[data-tg="load-modal"]' ).modal( 'hide' );

				_buildStep_0();

				// reset file input
				$fileInput.val( '' );
			}

		} );
	}
	// init
	Utils.$functionElems.filter( '[data-fn="config-load"]' ).on( 'click', function() {
		Utils.$functionElems.filter( '#toggle-navbar-collapse' ).trigger( 'click' );
		_loadCurrentElectionConfig();
	} );

	// reset election
	_resetElection = function() {

	}

	// confirm modal
	$.fn._confirmModal = function( options ) {

        var defaults = {
			header: 'Bitte bestätigen',
			headerState: 'modal-title',
			body: 'Bitte bestätige die Aktion.',
			dismissButtonState: 'btn btn-default',
			confirmButtonState: 'btn btn-danger',
			dismissButtonIcon: 'fa fa-close',
			confirmButtonIcon: 'fa fa-check',
			dismissButtonText: 'Abbrechen',
			confirmButtonText: 'Ok',
			confirmCallback: null,
			dismissCallback: null
        };

        options = $.extend( {}, defaults, options );

        var $modal = $( this );

		$modal.find( '[data-g-tg="modal-title"]' ).html( options.header ).attr( 'class', options.headerState );
		$modal.find( '[data-g-tg="modal-body"]' ).html( options.body );

		var $confirmButton = $modal.find( '[data-g-fn="confirm-modal-confirm"]' );
		$confirmButton.attr( 'class', options.confirmButtonState );
		$confirmButton.find( '[data-g-tg="btn-icon"]' ).attr( 'class', options.confirmButtonIcon );
		$confirmButton.find( '[data-g-tg="btn-text"]' ).html( options.confirmButtonText );

		var $dismissButton = $modal.find( '[data-g-fn="confirm-modal-dismiss"]' );
		$dismissButton.attr( 'class', options.dismissButtonState );
		$dismissButton.find( '[data-g-tg="btn-icon"]' ).attr( 'class', options.dismissButtonIcon );
		$dismissButton.find( '[data-g-tg="btn-text"]' ).html( options.dismissButtonText );

		$modal.modal( 'show' );

		if ( options.confirmCallback ) {
			$confirmButton.one( 'click', function() {
				options.confirmCallback();
			} );
		}

		if ( options.dismissCallback ) {
			$modal.one( 'hide.bs.modal', function() {
				options.dismissCallback();
			} );
		}
	}
	// init
	Utils.$functionElems.filter( '[data-fn="config-delete"]' ).on( 'click', function() {

		Utils.$functionElems.filter( '#toggle-navbar-collapse' ).trigger( 'click' );

		var $confirmModal = Utils.$targetElems.filter( '[data-tg="confirm-modal"]' );

		$confirmModal._confirmModal( {
			header: 'Bitte bestätigen',
			headerState: 'modal-title text-danger',
			body: 'Möchtest Du wirklich die gesamte Wahl zurücksetzen?',
			dismissButtonState: 'btn btn-default',
			confirmButtonState: 'btn btn-danger',
			dismissButtonIcon: 'fa fa-close',
			confirmButtonIcon: 'fa fa-trash',
			dismissButtonText: 'Nein, doch nicht',
			confirmButtonText: 'Zurücksetzen',
			confirmCallback: function() {
				window.location.reload();
			}
		} );
	} );

	// navigation
    var _Navigation = {
    	currentStep: 0,
    	steps: 4,
    	$electionStep: [],
    	$stepPrev: [],
    	$stepNext: [],
    	$select: []
    };

	_Navigation._prev = function() {
		// if last step jump to steps -2
		if ( _Navigation.currentStep == _Navigation.steps - 1 ) {
			_Navigation.currentStep = _Navigation.currentStep - 2;
			_Navigation.$electionStep[ _Navigation.currentStep + 2 ].hide();
		}
		else {
			_Navigation.currentStep = ( _Navigation.currentStep > 0 ) ? _Navigation.currentStep - 1 : 0;
		}
		_Navigation.$electionStep[ _Navigation.currentStep + 1 ].hide();
		_Navigation.$electionStep[ _Navigation.currentStep ].show();
		_Navigation._toTop();

		console.log( 'nav prev ' + _Navigation.currentStep );
	}

	_Navigation._next = function() {
		_Navigation.currentStep = ( _Navigation.currentStep < _Navigation.steps ) ? _Navigation.currentStep + 1 : _Navigation.steps;
		if ( _Navigation.currentStep < _Navigation.steps - 1 ) {
			_Navigation.$electionStep[ _Navigation.currentStep - 1 ].hide();
			_Navigation._toTop();
		}
		_Navigation.$electionStep[ _Navigation.currentStep ].show();

		console.log( 'nav next ' + _Navigation.currentStep );
	}

	_Navigation._toTop = function() {
		//Utils.$scrollRoot.animate( { scrollTop: 0 }, 300 );
		Utils.$functionElems.filter( '[data-fn="to-top-wrapper"]' ).children( 'a' ).trigger( 'click' );
	}

    _Navigation._init = function() {

    	// get step sections, get back buttons
    	for ( var i = 0; i <= _Navigation.steps; i++ ) {
    		//console.log( 'i: ' + i );

    		_Navigation.$electionStep[ i ] = Utils.$targetElems.filter( stepIdentifierPrefix + i + identifierSuffix );

    		// prev (only step 1 & 2)
    		if ( i > 0 && i < _Navigation.steps - 1 ) {
    			_Navigation.$stepPrev[ i ] = Utils.$functionElems.filter( stepPrevIdentifierPrefix + i + identifierSuffix );
    			_Navigation.$stepPrev[ i ].on( 'click', function( event ) {
    				event.preventDefault();
    				_Navigation._prev();
    			} );
    		}

			// next (all but step 3)
    		if ( i < _Navigation.steps ) {
    			_Navigation.$stepNext[ i ] = Utils.$functionElems.filter( stepFormIdentifierPrefix + i + identifierSuffix );
    			_Navigation.$stepNext[ i ].on( 'submit', function() {
    				_Navigation._next();
    			} );
    		}

    		// hide step sections but current
    		if ( i !== _Navigation.currentStep ) {
    			_Navigation.$electionStep[ i ].hide();
    		}

    		// get select
    		if ( Utils.$functionElems.filter( stepSelectIdentifierPrefix + i + identifierSuffix ).length > 0 ) {
    			_Navigation.$select[ i ] = Utils.$functionElems.filter( stepSelectIdentifierPrefix + i + identifierSuffix );
    			_Navigation.$select[ i ].on( 'change', function() {
    				console.log( 'change ' + $( this ).val() );

    				var value = $( this ).val();
    				var $form = $( this ).closest( 'form' );

    				if ( value != -1 ) {
	    				// hide all
	    				$form
	    					.find( '[' + itemIdAttr + ']' )
	    					.hide()
	    				;
	    				// show selected
	    				$form
	    					.find( '[' + itemIdAttr + '^="' + value + '"]' )
	    					.show()
	    				;
    				}
    				else {
	    				// show all
	    				$form
	    					.find( '[' + itemIdAttr + ']' )
	    					.show()
	    				;
    				}

    			} );
    		}

    	}

    }

    // init (called from init.js)
    $.fn.dibElection = function() {
    	_buildStep_0();
    	_Navigation._init();
    }

} )( jQuery, MY_UTILS );
