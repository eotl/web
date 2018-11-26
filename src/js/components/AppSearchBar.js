import React from 'react';
import { Link } from 'react-router-dom';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/appLayout';

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

@withStyles(styles, { withTheme: true })
class AppSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: '',
      popper: '',
      suggestions: [],
    };
  }

  getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : this.props.suggestions.filter(suggestion => {
          const keep =
            count < 5 && suggestion.title.slice(0, inputLength).toLowerCase() === inputValue;
          if (keep) {
            count += 1;
          }
          return keep;
        });
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.state.suggestions.length > 0) {
        this.props.history.push(this.state.suggestions[0].path);
      }
      this.clear();
    }
  };

  clear() {
    this.setState({
      single: ''
    });    
  }

  render() {
    const { classes } = this.props;

    const renderInputComponent = (inputProps) => {
      const { classes, inputRef = () => {}, ref, ...other } = inputProps;

      return (
        <TextField
          fullWidth
          InputProps={{
            inputRef: node => {
              ref(node);
              inputRef(node);
            },
            classes: {
              root: classes.searchInputRoot,
              input: classes.searchInputInput,
            },
          }}
          {...other}
        />
      );
    }

    const renderSuggestion = (suggestion, { query, isHighlighted }) => {
      const matches = match(suggestion.title, query);
      const parts = parse(suggestion.title, matches);

      const primary = (
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={index} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      );

      return (
        <Link to={suggestion.path} className={classes.menuLink}>
          <MenuItem selected={isHighlighted} component="div">
            <ListItemText primary={primary} secondary={suggestion.parentTitle} />
          </MenuItem>
        </Link>
      );
    }

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Search…',
            value: this.state.single,
            onChange: this.handleChange('single'),
            onKeyPress: this.handleKeyPress
          }}
          theme={{
            container: classes.suggestionsContainer,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

export default AppSearchBar;