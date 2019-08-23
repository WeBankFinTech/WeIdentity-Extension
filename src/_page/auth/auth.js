import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid';
import UserIcon from '@material-ui/icons/Accessibility'
import OrgIcon from '@material-ui/icons/AccountBalance'
import ArrowIcon from '@material-ui/icons/TrendingFlat'
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
    }
}));

export function AuthContent() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                        授权
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <UserIcon />
            </Grid>
            <Grid item xs={4}>
                <ArrowIcon />
            </Grid>
            <Grid item xs={4}>
                <OrgIcon />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h7" gutterBottom>
                        是否授权给 organization?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" className={classes.button}>
                    取消
                </Button>
                <Button variant="outlined" color="primary" className={classes.button}>
                    授权
                </Button>
            </Grid>
        </Grid>
    )
}


